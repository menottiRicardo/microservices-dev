import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { PrismaService } from './prisma.service';
import { TablesModule } from './tables/tables.module';
import { ProductsModule } from './products/products.module';
import { RmqModule } from './rmq/rmq.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TablesModule,
    ProductsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RmqModule.register({
      name: 'AUTH',
    }),
    AuthModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
})
export class OrdersModule {}
