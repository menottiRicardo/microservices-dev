import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';

@Schema({ versionKey: false })
export class Tenant extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  users: string[];
}

export const TenantSchema = SchemaFactory.createForClass(Tenant);
