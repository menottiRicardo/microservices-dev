import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  create() {
    
    return true;
  }
}
