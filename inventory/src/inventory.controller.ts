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
import { InventoryService } from './inventory.service';

@ApiTags('Orders')
@Controller('')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

 

  @Get('')
  findAll() {
    return true
  }


}
