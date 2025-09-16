import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Flower, Prisma, Shop } from '@prisma/client';
import { SortingType } from './enums';

@Injectable()
export class ShopRepository {
  constructor(private readonly prisma: PrismaService) {}

  getShops(params: { limit: number; offset: number }): Promise<Shop[]> {
    return this.prisma.shop.findMany({
      take: params.limit,
      skip: params.offset,
    });
  }

  getShopFlowers(params: {
    sortBy: SortingType;
    shopId: string;
    limit: number;
    offset: number;
  }): Promise<Flower[]> {
    const { limit, offset, shopId, sortBy } = params;

    const getOrder: Record<SortingType, object> = {
      [SortingType.byDate]: { createdAt: 'asc' },
      [SortingType.byPrice]: { price: 'asc' },
    };

    return this.prisma.flower.findMany({
      where: { shopId },
      take: limit,
      skip: offset,
      orderBy: getOrder[sortBy],
    });
  }

  getFlowersTotal(shopId: string) {
    return this.prisma.flower.count({ where: { shopId } });
  }
}
