import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AsignTenantRequest {
  @IsString()
  id: string;

  users: string[];
}
