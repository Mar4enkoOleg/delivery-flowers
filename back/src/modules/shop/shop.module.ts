import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopRepository } from './shop.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ShopService, ShopRepository],
  exports: [ShopService],
})
export class ShopModule {}
