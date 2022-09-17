import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(createTable: Prisma.ProductCreateInput, tenantId: string) {
    const newOrder = this.prisma.product.create({
      data: {
        ...createTable,
        tenantId,
      },
    });
    return newOrder;
  }

  findAll(tenantId: string) {
    return this.prisma.product.findMany({
      where: {
        tenantId: tenantId,
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

  update(id: string, updateTable: Prisma.ProductUpdateInput) {
    return this.prisma.product.update({
      where: {
        id,
      },
      data: updateTable,
    });
  }

  remove(id: string) {
    return `This action removes a #${id} table`;
  }
}

