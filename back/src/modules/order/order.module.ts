import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [OrderService, OrderRepository],
  exports: [OrderService],
})
export class OrderModule {}
