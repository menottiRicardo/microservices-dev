import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtPayload } from 'jsonwebtoken';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { IDecodeResponse } from './core/interfaces/IDecodeResponse';
import { ITokenResponse } from './core/interfaces/ITokenResponse';
import { RmqService } from './rmq/rmq.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rmqService: RmqService,
  ) {}

  @MessagePattern('test')
  public async createToken(
    @Payload() data: any,
    @Ctx() context: RmqContext,
  ): Promise<any> {
    this.appService.createToken(data.test);
    return this.rmqService.ack(context);
  }
}
