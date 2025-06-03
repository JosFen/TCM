import { PrismaClient } from '../src/generated/prisma';
import fs from 'fs';
import csv from 'csv-parser';

const prisma = new PrismaClient();

// Track already processed scientific names
const processedScientifNames = new Set<string>();

async function processPlantRow(row: any, index: number) {
  try {
    if (!row['Specific Epiphet']) {
      console.warn(`Skipping row ${index}: Specific Epiphet`);
      return null;
    }

    const scientificName = row['Specific Epiphet'].trim();
    if (processedScientifNames.has(scientificName)) {
      console.log(`Skipping duplicate scientific name: ${scientificName}`);
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
        family: row['Plant Family'],
        class: row['Plant Class'],
        vascular: row['Plant Classification'].toLowerCase()=== 'vascular' ? true :
                  null
      }
    }) ?? await prisma.plantTaxonomy.create({
      data: {
        family: row['Plant Family'],
        class: row['Plant Class'],
        vascular: row['Plant Classification'].toLowerCase() === 'vascular' ? true : null
      }
    });

    // STEP 2: Create the plant
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
      console.log(`Created plant: ${plant.plantScientificName}`);
    } else {
      console.log(`Plant already exists: ${scientificName}`);
      // Optional: Update plantCommonName or other fields here if you want to merge new data
    }
   
    console.log(`Created plant: ${plant.plantScientificName}`);
    return plant;

  } catch (error) {
    console.error(`Error processing row ${index}:`, error);
    return null;
  }
}

async function main() {
  await prisma.$executeRawUnsafe(`
  TRUNCATE TABLE plant_nomenclature, plant_taxonomy RESTART IDENTITY CASCADE;
`);
  const results: any[] = [];
  
  // Read CSV file
  fs.createReadStream('./files/TCM_dataframe_v1.csv')
    .pipe(csv())
    .on('data', (data: any) => results.push(data))
    .on('end', async () => {
      console.log(`CSV file successfully processed, ${results.length} records found`);
      
      // Process in batches of 50
      const BATCH_SIZE = 50;
      let successCount = 0;
      
      for (let i = 0; i < results.length; i += BATCH_SIZE) {
        const batch = results.slice(i, i + BATCH_SIZE);
        const batchResults = await Promise.all(
          batch.map((row, idx) => processPlantRow(row, i + idx))
        );
        successCount += batchResults.filter(r => r !== null).length;
      }

      console.log(`Seed complete. Successfully processed ${successCount} unique plants`);
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