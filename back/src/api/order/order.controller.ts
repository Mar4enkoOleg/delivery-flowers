import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { OrderService } from '../../modules/order/order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { QueryIdParam } from '../../common/dto/query-id-param.dto';
import { GetOrdersQueryDto } from './dto/get-orders-query.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/:id')
  getOrder(@Param() { id }: QueryIdParam) {
    return this.orderService.getOrder(id);
  }

  @Get()
  getOrders(@Query() data: GetOrdersQueryDto) {
    return this.orderService.getOrders(data);
  }

  @Post()
  createOrder(@Body() data: CreateOrderDto) {
    return this.orderService.createOrder(data);
  }
}
