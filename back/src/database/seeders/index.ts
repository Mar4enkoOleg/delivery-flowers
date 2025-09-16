import { PrismaClient } from '@prisma/client';
import { seedDatabase } from './seed-database';

let prisma: PrismaClient;

const main = async () => {
  prisma = new PrismaClient();

  await prisma.$connect();

  await seedDatabase(prisma);
};

main()
  // eslint-disable-next-line no-console
  .catch((e) => console.error(e))
  .finally(async () => {
    if (prisma) await prisma.$disconnect();
  });
