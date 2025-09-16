import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrder, GetOrderParams } from './types';

@Injectable()
export class OrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  createOrder(data: CreateOrder) {
    const { flowers, ...rest } = data;

    return this.prisma.order.create({
      select: { id: true },
      data: {
        ...rest,
        orderedFlower: {
          createMany: {
            data: flowers.map((flower) => ({
              flowerId: flower.flowerId,
              count: flower.count,
            })),
          },
        },
      },
    });
  }

  getOrder(id: string) {
    return this.prisma.order.findFirst({
      where: { id },
      include: { orderedFlower: { include: { flower: true } } },
    });
  }

  getOrders(data: GetOrderParams) {
    const { email, phone } = data;

    return this.prisma.order.findMany({
      where: { AND: { email, phone } },
      include: { orderedFlower: { include: { flower: true } } },
    });
  }
}
