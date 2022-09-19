import { Injectable } from '@nestjs/common';
import { TenantRepository } from './tenant.repository';
import { CreateTenantRequest } from './dto/create-tenant.request';
import { Tenant } from './schemas/tenant.schema';
import { AsignTenantRequest } from './dto/asign-user.request';

@Injectable()
export class TenantService {
  constructor(private readonly tenantRepository: TenantRepository) {}

  async createTenant(request: CreateTenantRequest) {
    console.log('validae', request);
    const tenant = await this.tenantRepository.create({
      ...request,
    });
    return tenant;
  }

  async asignTenant(request: AsignTenantRequest) {
    console.log('validae', request);
    const tenant = await this.tenantRepository.findOneAndUpdate(
      { _id: request.id },
      { users: request.users },
    );
    return tenant;
  }

  async getUser(getUserArgs: Partial<Tenant>) {
    return this.tenantRepository.findOne(getUserArgs);
  }
}
