import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH') private readonly tokenClient: ClientProxy,
  ) {
  }

  async getOrders() {
    // const test = this.tokenClient.emit('test', {
    //   test: 'success',
    // });
    return true
  }
}
