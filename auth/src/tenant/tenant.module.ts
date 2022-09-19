import { Module } from '@nestjs/common';
import { TenantRepository } from './tenant.repository';
import { UsersController } from './tenant.controller';
import { TenantService } from './tenant.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tenant, TenantSchema } from './schemas/tenant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tenant.name, schema: TenantSchema }]),
  ],
  controllers: [UsersController],
  providers: [TenantService, TenantRepository],
  exports: [TenantService],
})
export class TenantModule {}
