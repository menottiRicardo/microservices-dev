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
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { OrdersService } from './orders.service';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  
  @Post()
  @ApiOperation({ summary: 'Create Order' })
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createOrder: Prisma.OrderCreateInput,
    @Req() req:any
  ) {
    console.log(req.user)
    return this.ordersService.create(createOrder, req.tenantId);
  }

  @Get('tenantId=:tenantId')
  findAll(@Param('tenantId') tenantId: string) {
    return this.ordersService.findAll(tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTable: Prisma.OrderCreateInput,
  ) {
    return this.ordersService.update(id, updateTable);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }
}
