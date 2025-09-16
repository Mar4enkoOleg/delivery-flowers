import { Controller, Get, Param, Query } from '@nestjs/common';
import { ShopService } from '../../modules/shop/shop.service';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { QueryIdParam } from '../../common/dto/query-id-param.dto';
import { GetShopFlowersDto } from './dto/get-shop-flowers.dto';

@Controller('shops')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get()
  getShopList(@Query() query: PaginationQueryDto) {
    return this.shopService.getShops(query);
  }

  @Get('/:id/flowers')
  getShopFlowerList(
    @Param() { id: shopId }: QueryIdParam,
    @Query() query: GetShopFlowersDto,
  ) {
    return this.shopService.getShopFlowers({ ...query, shopId });
  }
}
