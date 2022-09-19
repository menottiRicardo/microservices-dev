import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import { ProductService } from './product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create Order' })
  @UseGuards(JwtAuthGuard)
  create(@Body() createOrder: Prisma.ProductCreateInput, @Req() req: any) {
    return this.productService.create(createOrder, req.user.tenantId);
  }

  @Get('byTenant')
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req: any) {
    console.log('hre')
    return this.productService.findAll(req.user.tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTable: Prisma.ProductCreateInput,
  ) {
    return this.productService.update(id, updateTable);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
