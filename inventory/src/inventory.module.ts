import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { PrismaService } from './prisma.service';
import { ProductsModule } from './product/products.module';
import { RmqModule } from './rmq/rmq.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ProductsModule,
    CategoriesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RmqModule.register({
      name: 'AUTH',
    }),
    AuthModule,
  ],
  controllers: [InventoryController],
  providers: [InventoryService, PrismaService],
})
export class OrdersModule {}
