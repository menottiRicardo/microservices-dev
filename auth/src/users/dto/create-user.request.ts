import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequest {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  tenantId: string;
  
  @IsString()
  @IsNotEmpty()
  password: string;
}
