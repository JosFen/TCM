const { execSync } = require('child_process');
const { PrismaClient } = require('../dist/generated/prisma');

async function main() {
  const prisma = new PrismaClient();

  try {
    const count = await prisma.plantNomenclature.count();

    if (count === 0) {
      console.log('Database is empty. Running seed...');
      execSync('npx prisma db seed', { stdio: 'inherit' });
      console.log('Seed complete.');
    } else {
      console.log(`Database already has ${count} plants. Skipping seed.`);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
