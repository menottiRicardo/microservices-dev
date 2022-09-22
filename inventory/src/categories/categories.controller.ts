import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CategoriesService } from './categories.service';

@Controller('category')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createTableDto: Prisma.CategoryCreateInput, @Req() req: any) {
    
    return this.categoriesService.create(createTableDto, req.user.tenantId);
  }

  @Get('byTenant')
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req: any) {
    console.log('here',req.user)
    if(req.user === undefined) return 
    return this.categoriesService.findAll(req.user.tenantId)
  }

  @Get('health')
  health() {
    return this.categoriesService.health();
  }

  @Get('menu/:id')
  findMenu(@Param('id') tenantId: string) {
    
    return this.categoriesService.menu(tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategory: Prisma.CategoryUpdateInput,
  ) {
    return this.categoriesService.update(id, updateCategory);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
