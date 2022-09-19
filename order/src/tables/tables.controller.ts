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
import { TablesService } from './tables.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('table')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createTableDto: Prisma.TableCreateInput, @Req() req: any) {
    return this.tablesService.create(createTableDto, req.user.tenantId);
  }

  @Get('byTenant')
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req: any) {
    console.log('here')
    return this.tablesService.findAll(req.user.tenantId);
  }

  @Get('health')
  health() {
    return this.tablesService.health();
  }

  @Get('orders/:id')
  findActiveOrders(@Param('id') id: string) {
    return this.tablesService.findActiveOrders(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tablesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTableDto: Prisma.TableUpdateInput,
  ) {
    return this.tablesService.update(id, updateTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tablesService.remove(id);
  }
}
