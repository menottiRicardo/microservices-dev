import { Body, Controller, Post, Put } from '@nestjs/common';
import { AsignTenantRequest } from './dto/asign-user.request';
import { CreateTenantRequest } from './dto/create-tenant.request';
import { TenantService } from './tenant.service';

@Controller('tenant')
export class UsersController {
  constructor(private readonly tenantService: TenantService) {}

  @Post('create')
  async createTenant(@Body() request: CreateTenantRequest) {
    return this.tenantService.createTenant(request);
  }

  @Put('update')
  async updateTenant(@Body() request: AsignTenantRequest) {
    return this.tenantService.asignTenant(request);
  }
}
