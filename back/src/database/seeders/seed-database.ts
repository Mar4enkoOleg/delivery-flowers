import { Prisma } from '@prisma/client';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';

const alphaId = '19932b28-8adf-4712-9acc-5baebb2fcb1b';
const betaId = '74732b28-8adf-4712-9acc-5baebb2fcb1b';
const sigmaId = '96932b28-8adf-4712-9acc-5baebb2fcb1b';

export async function seedDatabase(prisma: Prisma.TransactionClient) {
  await Promise.all([
    prisma.shop.upsert({
      create: {
        id: alphaId,
        name: 'Alpha shop',
        flowers: {
          createMany: {
            data: [
              {
                name: 'Alpha flower (variant 1)',
                price: 110,
                id: uuid(),
                createdAt: dayjs(new Date()).add(-10, 'days').toDate(),
              },
              {
                name: 'Alpha flower (variant 2)',
                price: 90,
                id: uuid(),
                createdAt: dayjs(new Date()).add(-20, 'days').toDate(),
              },
              {
                name: 'Alpha flower (variant 3)',
                price: 120,
                id: uuid(),
                createdAt: dayjs(new Date()).add(-24, 'days').toDate(),
              },
              {
                name: 'Alpha flower (variant 4)',
                price: 80,
                id: uuid(),
                createdAt: dayjs(new Date()).add(-18, 'days').toDate(),
              },
            ],
          },
        },
      },
      update: {},
      where: { id: alphaId },
    }),
    prisma.shop.upsert({
      create: {
        id: betaId,
        name: 'Beta shop',
        flowers: {
          createMany: {
            data: [
              {
                name: 'Beta flower (variant 1)',
                price: 100,
                id: uuid(),
                createdAt: dayjs(new Date()).add(-5, 'days').toDate(),
              },
              {
                name: 'Beta flower (variant 2)',
                price: 255,
                id: uuid(),
                createdAt: dayjs(new Date()).add(-8, 'days').toDate(),
              },
              {
                name: 'Beta flower (variant 3)',
                price: 300,
                id: uuid(),
                createdAt: dayjs(new Date()).add(-1, 'days').toDate(),
              },
              {
                name: 'Beta flower (variant 4)',
                price: 50,
                id: uuid(),
                createdAt: dayjs(new Date()).add(-88, 'days').toDate(),
              },
            ],
          },
        },
      },
      update: {},
      where: { id: betaId },
    }),
    prisma.shop.upsert({
      create: {
        id: sigmaId,
        name: 'Sigma shop',
        flowers: {
          createMany: {
            data: [
              {
                name: 'Sigma flower (variant 1)',
                price: 55,
                id: uuid(),
                createdAt: dayjs(new Date()).add(-1, 'days').toDate(),
              },
              {
                name: 'Sigma flower (variant 2)',
                price: 25,
                id: uuid(),
                createdAt: dayjs(new Date()).add(-4, 'days').toDate(),
              },
              {
                name: 'Sigma flower (variant 3)',
                price: 30,
                id: uuid(),
                createdAt: dayjs(new Date()).add(-2, 'days').toDate(),
              },
              {
                name: 'Sigma flower (variant 4)',
                price: 500,
                id: uuid(),
                createdAt: dayjs(new Date()).add(-3, 'days').toDate(),
              },
            ],
          },
        },
      },
      update: {},
      where: { id: sigmaId },
    }),
  ]);
}
