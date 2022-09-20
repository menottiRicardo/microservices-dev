import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  create(createProductInput: Prisma.ProductCreateInput) {
    const newTable = this.prisma.product.create({
      data: { ...createProductInput, status: 'CREATED' },
    });
    console.log(newTable)
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

  update(id: string, updateProductDto: Prisma.ProductUpdateInput) {
    return this.prisma.product.update({
      where: {
        id,
      },
      data: {
        ...updateProductDto,
      },
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
