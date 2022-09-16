import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  create(createTable: Prisma.OrderCreateInput, tenantId: string) {
    const newOrder = this.prisma.order.create({
      data: {
        ...createTable,
        tenantId,
      },
    });
    return newOrder;
  }

  findAll(tenantId: string) {
    return this.prisma.order.findMany({
      where: {
        tenantId: tenantId,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateTable: Prisma.OrderUpdateInput) {
    return this.prisma.order.update({
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
