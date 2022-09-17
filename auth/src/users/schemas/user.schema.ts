import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';


@Schema({ versionKey: false })
export class User extends AbstractDocument {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  tenantId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
