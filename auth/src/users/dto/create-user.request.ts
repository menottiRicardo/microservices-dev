import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequest {

  @IsNotEmpty()
  tenantId: string;

  @IsString()
  username: string
  
  @IsString()
  @IsNotEmpty()
  password: string;
}
