import { Injectable } from '@nestjs/common';
import { ITokenResponse } from './core/interfaces/ITokenResponse';
import { sign, decode, JwtPayload } from 'jsonwebtoken';
import { IDecodeResponse } from './core/interfaces/IDecodeResponse';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  public createToken(userId: number): any {
    console.log(userId, "test..")
    return false
  }

  public async decodeToken(
    token: string,
  ): Promise<string | JwtPayload | IDecodeResponse> {
    return decode(token);
  }
}
