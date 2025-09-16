import { Injectable } from '@nestjs/common';
import { ShopRepository } from './shop.repository';
import { SortingType } from './enums';

@Injectable()
export class ShopService {
  constructor(private readonly shopRepository: ShopRepository) {}

  getShops(params: { limit: number; offset: number }) {
    return this.shopRepository.getShops(params);
  }

  async getShopFlowers(params: {
    sortBy: SortingType;
    shopId: string;
    limit: number;
    offset: number;
  }) {
    const [flowers, total] = await Promise.all([
      this.shopRepository.getShopFlowers(params),
      this.shopRepository.getFlowersTotal(params.shopId),
    ]);
    return { flowers, total };
  }
}
