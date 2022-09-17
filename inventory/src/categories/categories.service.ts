import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}
  create(newCategoryInputs: Prisma.CategoryCreateInput, tenantId: string) {
    const newCategory = this.prisma.category.create({
      data: { ...newCategoryInputs, tenantId },
    });
    return newCategory;
  }

  findAll(tenantId: string) {
    return this.prisma.category.findMany({
      where: {
        tenantId: tenantId,
      },
    });
  }

  health() {
    const test = this.prisma.category.findFirst();
    if (test == undefined) {
      throw new Error('NOT HEALTHY');
    }
    return { status: 'healthy' };
  }

  menu(tenantId: string) {
    return this.prisma.category.findMany({
      where: {
        tenantId: tenantId,
      },
      include: {
        products: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.category.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateCategory: Prisma.CategoryUpdateInput) {
    return this.prisma.category.update({
      where: {
        id,
      },
      data: updateCategory,
    });
  }

  remove(id: string) {
    return `This action removes a #${id} table`;
  }
}
