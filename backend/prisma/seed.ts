import { PrismaClient } from '../src/generated/prisma';
import fs from 'fs';
import csv from 'csv-parser';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// Track already processed scientific names
const processedScientifNames = new Set<string>();
const processedMedicialProperties = new Set<string>();
const processedHerbalDrugBackground = new Set<string>();

async function processPlantRow(row: any, index: number) {
  try {
    if (!row['Specific Epiphet']) {
      console.warn(`Skipping row ${index}: Specific Epiphet`);
      return null;
    }

    const scientificName = row['Specific Epiphet'].trim();
    if (processedScientifNames.has(scientificName)) {
      // console.log(`Skipping duplicate scientific name: ${scientificName}`);
      return null;
    }
    processedScientifNames.add(scientificName);
    // Find existing plant (if any)
    let plant = await prisma.plantNomenclature.findUnique({
      where: { plantScientificName: scientificName }
    });

    // STEP 1: Find or create taxonomy for the plant
    const taxonomy = await prisma.plantTaxonomy.findFirst({
      where: {
        family: row['Plant Family'].trim(),
        class: row['Plant Class'].trim(),
        vascular: row['Plant Classification'].toLowerCase().trim() === 'vascular' ? true :
          null
      }
    }) ?? await prisma.plantTaxonomy.create({
      data: {
        family: row['Plant Family'].trim(),
        class: row['Plant Class'].trim(),
        vascular: row['Plant Classification'].toLowerCase().trim() === 'vascular' ? true : null
      }
    });

    // STEP 2: Create the plant that depends on the taxonomy
    if (!plant) {
      const linkList = [
        row['MPNS Link']?.trim(),
        row['FOC Link']?.trim(),
        row['Kew POW Link']?.trim()
      ].filter(Boolean);

      plant = await prisma.plantNomenclature.create({
        data: {
          plantScientificName: scientificName,
          plantCommonName: row['Common Name'] ?
            row['Common Name'].split(',').map((name: string) => name.trim()).filter(Boolean) : [],
          plantPinyin: row['Pinyin (Plant Name)'] || null,
          plantChineseName: row['Mandarin (Plant Name)'] || null,
          taxonomy: {
            connect: { id: taxonomy.id }
          },
          links: linkList
        }
      });

      // console.log(`Created plant: ${plant.plantScientificName}`);
    } else {
      // console.log(`Plant already exists: ${scientificName}`);
    }
    // STEP 3: Create related records for the plant

    // create PlantEcologyDistribution:
    await prisma.plantEcologyDistribution.create({
      data: {
        plant: {
          connect: {
            internalId: plant.internalId
          }
        },
        habitat: row['Habitat'] || null,
        plantOrigin: row['Plant Origin (province/ region)'] || null,
        globalRange: row['Range/ Distribution'] || null,
        chinaRange: row['Range in China'] || null,
        endemic: row['Endemic'] || null,
      }
    });

    // create PlantConservation:
    await prisma.plantConservation.create({
      data: {
        plant: {
          connect: {
            internalId: plant.internalId
          }
        },
        globalConservationStatus: row['Worldwide Conservation Status (IUCN Red List)'].toUpperCase().split(' ').join('_') || null,
        chinaConservationStatus: row['National Conservation Status (China)'] || null,
        protectedStatus: row['Protected Status'] || null,
        invasiveStatus: row['Invasive?'].toLowerCase() === 'yes'
          ? 'INVASIVE'
          : row['Invasive?'].toLowerCase() === 'possible'
            ? 'POSSIBLY_INVASIVE'
            : row['Invasive?'].toLowerCase() === 'no'
              ? 'NON_INVASIVE'
              : null,
        invasiveRange: row['Invasive Range'] || null,
      }
    });

    // create Ethnobotany:
    await prisma.ethnobotany.create({
      data: {
        plant: {
          connect: {
            internalId: plant.internalId
          }
        },
        folkMedicinalUses: row['Folk Medicinal Uses'] || null,
        otherCulturalUses: row['Other Cultural Uses'].split(',').map((use: string) => use.trim()) || null,
        references: null,
      }
    });

    // create plantSynonym if they exist
    if (row['Botanical Synonyms']) {
      const synonyms = row['Botanical Synonyms'].split(',').map((syn: string) => syn.trim());
      // console.log("synonyms : " , synonyms);
      for (const synonym of synonyms) {
        await prisma.plantSynonym.create({
          data: {
            name: synonym,
            plant: {
              connect: {
                internalId: plant.internalId
              }
            },
          }
        });
      }
    }

    // create PlantMorphology: 
    // TO BE REVIEWED LATER: clean floweringPeriod and fruitingPeriod, then create unique records

    await prisma.plantMorphology.create({
      data: {
        lifecycle: row['Lifecycle'] ? row['Lifecycle'].split(',').map((l: string) => l.trim().toUpperCase()) : [],
        isTerrestrial: row['Aquatic or Terrestrial'] ? (row['Aquatic or Terrestrial'].toLowerCase().trim() === 'aquatic' ? false : true) : null,
        growthHabit: row['Growth Habit']?.trim() || null,
        isDeciduous: row['Deciduous/ Evergreen'] ? (row['Deciduous/ Evergreen'].toLowerCase().trim() === 'deciduous' ? true : false) : null,
        isDeciduousNote: row['Deciduous/ Evergreen']?.toLowerCase().trim() || null,
        reproductiveSystem: row['Reproductive Morphology']?.trim() || null,
        floweringPeriod: [],
        fruitingPeriod: [],
        floweringPeriodNote: row['Flowering Period']?.trim() || null, // to be reviewed/removed later
        fruitingPeriodNote: row['Fruiting Period']?.trim() || null, // to be reviewed/removed later
        plants: {
          connect: { internalId: plant.internalId } // Create a many-to-many relationship between plant and morphology
        }
      }
    });


    // console.log(`Created plant: ${plant.plantScientificName}`);
    return plant;

  } catch (error) {
    console.error(`Error processing row ${index}:`, error);
    return null;
  }
}

// Step 4: create medicinal properties and their relationships
async function processMedicinalProperties(row: any, index: number) {

  if (!row['Pharmaceutical Name']) {
    console.warn(`Skipping row ${index}: Pharmaceutical Name`);
    return null;
  }
  const pharmaceuticalName = row['Pharmaceutical Name'].trim();

  if (processedMedicialProperties.has(pharmaceuticalName)) {
    // console.log(`Skipping duplicate pharmaceutical name: ${pharmaceuticalName}`);
    return null;
  }
  processedMedicialProperties.add(pharmaceuticalName);
  // Find existing plant (if any)
  let medicinalProperty = await prisma.medicinalProperties.findUnique({
    where: { pharmaceuticalName: pharmaceuticalName }
  });
  // If medicinal property does not exist, create it
  if (!medicinalProperty) {
    try {
      medicinalProperty = await prisma.medicinalProperties.create({
        data: {
          pharmaceuticalName: pharmaceuticalName,
          herbalDrugPinyin: row['Pinyin (Medicinal Material)']?.trim() || null,
          taste: row['Taste']?.split(',').map((t: string) => t.trim()?.toUpperCase()).filter(Boolean) || [],
          energyFlow: row['Energy Flow']?.split(',').map((e: string) => e.trim().toUpperCase().replace(' ', '_')).filter(Boolean) || [],
          meridians: row['Meridian']?.split(',').map((m: string) => m.trim().toUpperCase().replace(/ /g, '_')).filter(Boolean) || [],
          actions: row['TCM Properties']?.trim() || null,
          pharmacologicalProperties: row['Medicinal/ Pharmacological Properties']?.split(',').map((p: string) => p.trim()) || [],
          indications: row['Indications']?.split(',').map((i: string) => i.trim()) || [],
          toxicity: row['Toxicity']?.trim() || null,
          secondaryMetabolites: row['Secondary Metabolites']?.trim() || null,
        }
      });
      // console.log(`Created medicinal property: ${medicinalProperty.pharmaceuticalName}`);
    } catch (error) {
      console.error(`Error creating medicinal property for row ${index}:`, error);
      return null;
    }
  } else {
    // console.log(`Medicinal property already exists: ${pharmaceuticalName}`);
  }

  return medicinalProperty;
}

async function processHerbalDrugBackground(row: any, index: number) {
  if (!row['Specific Epiphet'] || !row['Pharmaceutical Name']) {
    console.warn(`Skipping row ${index}: Specific Epiphet or Pharmaceutical Name is missing`);
    return null;
  }
  try {
    const scientificName = row['Specific Epiphet'].trim();
    const pharmaceuticalName = row['Pharmaceutical Name'].trim();
    const key = `${scientificName}-${pharmaceuticalName}`;

    if (processedHerbalDrugBackground.has(key)) {
      console.log(`Skipping duplicate herbal drug: ${key}`);
      return null;
    }
    processedHerbalDrugBackground.add(key);
    // Find existing herbal drug background
    let herbalDrugBackground = await prisma.herbalDrugBackground.create({
      data: {
        plant: {
          connect: {
            plantScientificName: scientificName
          }
        },
        medicinalProperty: {
          connect: {
            pharmaceuticalName: pharmaceuticalName
          }
        },
        herbalDrugPinyin: row['Pinyin (Medicinal Material)']?.trim() || null,
        plantPartUsed: row['Plant Part Used']?.trim() || null,
        officialStatus: null,
        harvestingTime: [],
        harvestingTimeNote: row['Harvesting Time']?.trim() || null,
        primaryProcessing: row['PPrimary Processing']?.trim() || null,
        secondaryProcessing: row['Secondary Processing']?.trim() || null,
        herbalDruglImage: null,
      }
    });
    console.log(`Created herbal drug background: ${herbalDrugBackground.plantScientificName} - ${herbalDrugBackground.pharmaceuticalName}`);

    // create sourcing_background:
    await prisma.sourcingBackground.create({
      data: {
        herbalDrug: {
          connect: {
            id: herbalDrugBackground.id
          }
        },
        cultivationStatus: (row['Plant under Cultivation?']?.trim().toLowerCase() === 'yes' ? true : false) || null,
        cultivationRegions: row['Cultivation Regions']?.trim() || null,
        wildHarvestingRegions: row['Wild-Harvesting Regions']?.trim() || null,
        harvestingPractice: row['Harvesting Practice']?.split(',').map((p: string) => p.trim().toUpperCase().replace('-', '_')).filter(Boolean) || [],
        harvestingPracticeNote: row['Harvesting Practice']?.trim() || null,
        daodiStatus: (row['Daodi Status']?.trim().toLowerCase() === 'yes' ? true : false) || null,
        daodiRegions: row['Daodi Regions']?.trim() || null,
        productionRegions: row['Production Regions']?.trim() || null,
      }
    });

    return herbalDrugBackground;
  } catch (error) {
    console.error(`Error processing herbal drug background for row ${index}:`, error);
    return null;
  }
}

async function handleEdgeCases() {
  // import/update harvestingPracticeNote for some edge cases:
  const updates = [
    {
      where: {
        herbalDrug: {
          plantScientificName: {
            in: ["Scrophularia ningpoensis Hemsl.", "Scutellaria baicalensis Georgi"]
          }
        }
      },
      data: {
        harvestingPracticeNote: "Cultivated (wild-harvested?)"
      }
    },
    {
      where: {
        herbalDrug: {
          plantScientificName: {
            in: ["Gardenia jasminoides J. Ellis"]
          }
        }
      },
      data: {
        harvestingPracticeNote: "Cultivated, wildharvested (?)"
      }
    },
    {
      where: {
        herbalDrug: {
          plantScientificName: {
            in: ["Dendrobium nobile Lindl."]
          }
        }
      },
      data: {
        harvestingPracticeNote: "Fostered', wild-harvested"
      }
    }
  ];

  for (const update of updates) {
    await prisma.sourcingBackground.updateMany(update);
  }
  console.log("Edge cases handled successfully");
}

async function seedUsers() {
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: [
      {
        username: 'admin',
        password: await bcrypt.hash('admin', 10),
        email: 'admin@example.com',
        role: 'ADMIN'
      },
      {
        username: 'chris',
        password: await bcrypt.hash('chris', 10),
        email: 'chris@example.com',
        role: 'ADMIN'
      },
      {
        username: 'general',
        password: await bcrypt.hash('general', 10),
        email: 'generalUser@example.com',
        role: 'USER'
      }
    ]
  });

  console.log("Users seeded successfully");
}

async function main() {
  await prisma.$executeRawUnsafe(`
  TRUNCATE TABLE 
  plant_nomenclature, plant_taxonomy, plant_synonym, 
  plant_ecology_distribution, plant_conservation, ethnobotany, 
  plant_morphology, medicinal_properties, herbal_drug_background, 
  sourcing_background 
  RESTART IDENTITY CASCADE;
`);
  await seedUsers();

  const results: any[] = [];

  // Read CSV file
  fs.createReadStream('./files/TCM_dataframe_v2.csv')
    .pipe(csv())
    .on('data', (data: any) => results.push(data))
    .on('end', async () => {
      console.log(`CSV file successfully processed, ${results.length} records found`);

      // Process in batches of 50
      const BATCH_SIZE = 50;
      let successCount = 0;

      for (let i = 0; i < results.length; i += BATCH_SIZE) {
        const batch = results.slice(i, i + BATCH_SIZE);

        // First process all plants
        const plants = await Promise.all(
          batch.map((row, idx) => processPlantRow(row, i + idx))
        );

        // Then process all medicinal properties
        const medicinalProperties = await Promise.all(
          batch.map((row, idx) => processMedicinalProperties(row, i + idx))
        );

        // Finally process herbal drug backgrounds with the created plants and properties
        const herbalDrugBackgrounds = await Promise.all(
          batch.map((row, idx) =>
            processHerbalDrugBackground(
              row,
              i + idx
            )
          )
        );

        successCount += herbalDrugBackgrounds.filter(r => r !== null).length;
      }
      await handleEdgeCases();
      console.log(`Seed complete. Successfully processed ${successCount} records`);
    });
}

main()
  .catch(e => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });