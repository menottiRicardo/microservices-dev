import { Injectable } from '@nestjs/common';
import { prisma, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TablesService {
  constructor(private prisma: PrismaService) {}
  create(createTableDto: Prisma.TableCreateInput, tenantId: string) {
    const newTable = this.prisma.table.create({
      data: { ...createTableDto, tenantId },
    });
    return newTable;
  }

  findAll(tenantId: string) {
    return this.prisma.table.findMany({
      where: {
        tenantId: tenantId,
      },
    });
  }

  health() {
    const test = this.prisma.table.findFirst();
    if (test == undefined) {
      throw new Error('NOT HEALTHY');
    }
    return { status: 'healthy' };
  }

  findOne(id: string) {
    return this.prisma.table.findUnique({
      where: {
        id,
      },
    });
  }

  async findActiveOrders(id: string) {
    const activeOrders = this.prisma.table.findUnique({
      where: {
        id,
      },
      include: {
        orders: true,
      },
    });
    const resolved = await activeOrders;
    const filteredOrders = await resolved.orders.filter(
      (order) => order.active === true,
    );
    return filteredOrders;
  }

  update(id: string, updateTableDto: Prisma.TableUpdateInput) {
    return this.prisma.table.update({
      where: {
        id,
      },
      data: updateTableDto,
    });
  }

  remove(id: string) {
    return `This action removes a #${id} table`;
  }
}
