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
import { ProductsService } from './products.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  
  create(
    @Body() createProductDto: Prisma.ProductCreateInput,
    
  ) {
    return this.productsService.create(createProductDto);
  }

  @Post('/ordered/:id')
  order(@Param('id') id: string) {
    return this.productsService.order(id);
  }

  @Post('/prepared')
  prepared(@Body() ids: string[]) {
    return this.productsService.prepared(ids);
  }

  @Get('/byOrder/:id')
  findAll(@Param('id') id: string) {
    return this.productsService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: Prisma.ProductUpdateInput,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
