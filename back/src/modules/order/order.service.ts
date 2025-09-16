import { Injectable } from '@nestjs/common';
import { CreateOrder, GetOrderParams } from './types';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  createOrder(data: CreateOrder) {
    return this.orderRepository.createOrder(data);
  }

  async getOrder(id: string) {
    const data = await this.orderRepository.getOrder(id);

    return {
      data,
      totalPrice: this.getTotalPrice(data),
    };
  }

  async getOrders(params: GetOrderParams) {
    const data = await this.orderRepository.getOrders(params);

    return {
      data: data.map((order) => ({
        order,
        totalPrice: this.getTotalPrice(order),
      })),
    };
  }

  private getTotalPrice(order) {
    return order.orderedFlower
      .map((orderedFlower) => orderedFlower.flower.price * orderedFlower.count)
      .reduce((acc, val) => acc + val);
  }
}
