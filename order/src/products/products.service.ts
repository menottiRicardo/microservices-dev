import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrdersService } from '../orders.service';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService,
    private orderService: OrdersService,
  ) {}
  create(createProductInput: Prisma.ProductCreateInput) {
    const newTable = this.prisma.product.create({
      data: { ...createProductInput, status: 'CREATED' },
    });
    console.log(newTable);
    return newTable;
  }

  order(id: string) {
    const order = this.prisma.product.updateMany({
      where: { AND: [{ orderId: id }, { status: 'CREATED' }] },
      data: { status: 'ORDERED' },
    });

    return order;
  }

  prepared(ids: string[]) {
    const updated = ids.map((id) =>
      this.prisma.product.update({
        where: { id },
        data: { status: 'PREPARED' },
      }),
    );

    return 'ready';
  }

  findAll(orderId: string) {
    return this.prisma.product.findMany({
      where: {
        orderId,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateProductDto: Prisma.ProductUpdateInput) {
    const updateProduct = await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        ...updateProductDto,
      },
    });

    const order = this.orderService.findOne(updateProduct.orderId);
    return order;
  }

  async remove(id: string) {
    const product = await this.prisma.product.delete({
      where: {
        id,
      },
    });
    
    return this.orderService.findOne(product.orderId);
  }
}
