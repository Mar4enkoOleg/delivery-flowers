import { Module } from '@nestjs/common';
import { ShopController } from './shop/shop.controller';
import { ShopModule } from '../modules/shop/shop.module';
import { OrderController } from './order/order.controller';
import { OrderModule } from '../modules/order/order.module';

@Module({
  controllers: [ShopController, OrderController],
  imports: [ShopModule, OrderModule],
})
export class ApiModule {}
