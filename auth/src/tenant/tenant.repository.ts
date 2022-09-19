import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { AbstractRepository } from 'src/database/abstract.repository';
import { Tenant } from './schemas/tenant.schema';



@Injectable()
export class TenantRepository extends AbstractRepository<Tenant> {
  protected readonly logger = new Logger(TenantRepository.name);

  constructor(
    @InjectModel(Tenant.name) tenantModel: Model<Tenant>,
    @InjectConnection() connection: Connection,
  ) {
    super(tenantModel, connection);
  }
}
