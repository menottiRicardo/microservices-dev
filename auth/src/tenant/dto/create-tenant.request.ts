import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateTenantRequest {
  @IsString()
  name: string;

  users: string[];
}
