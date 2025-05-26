import { PrismaClient } from '../src/generated/prisma';
import fs from 'fs';
import csv from 'csv-parser';

const prisma = new PrismaClient();

// Track already processed scientific names
const processedScientifNames = new Set<string>();

async function processPlantRow(row: any, index: number) {
  try {
    if (!row.Genus || !row['Specific Epiphet']) {
      console.warn(`Skipping row ${index}: Missing Genus or Specific Epiphet`);
      return null;
    }

    const scientificName = row['Specific Epiphet'].trim();
    if (processedScientifNames.has(scientificName)) {
      console.log(`Skipping duplicate scientific name: ${scientificName}`);
      return null;
    }

    // STEP 1: Find or create taxonomy manually
    const taxonomy = await prisma.plantTaxonomy.findFirst({
      where: {
        family: row['Plant Family'],
        class: row['Plant Class'],
        vascular: row['Plant Classification'] === 'Vascular' ? true :
                  row['Plant Classification'] ? false : undefined
      }
    }) ?? await prisma.plantTaxonomy.create({
      data: {
        family: row['Plant Family'],
        class: row['Plant Class'],
        vascular: row['Plant Classification'] === 'Vascular' ? true :
                  row['Plant Classification'] ? false : undefined
      }
    });

    // STEP 2: Create the plant
    const plant = await prisma.plantNomenclature.create({
      data: {
        plantScientificName: scientificName,
        plantCommonName: row['Common Name'] ? 
          row['Common Name'].split(',').map((name: string) => name.trim()).filter(Boolean) : [],
        plantPinyin: row['Pinyin (Plant Name)'] || null,
        plantChineseName: row['Mandarin (Plant Name)'] || null,
        taxonomy: {
          connect: { id: taxonomy.id }
        }
      }
    });

    processedScientifNames.add(scientificName);
    console.log(`Created plant: ${plant.plantScientificName}`);
    return plant;

  } catch (error) {
    console.error(`Error processing row ${index}:`, error);
    return null;
  }
}

async function main() {
  const results: any[] = [];
  
  // Read CSV file
  fs.createReadStream('./files/TCM_dataframe.csv')
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