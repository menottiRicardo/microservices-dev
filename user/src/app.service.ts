import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { hashSync, compareSync } from 'bcrypt';

@Injectable()
export class AppService {
  constructor(
    @Inject('TOKEN_SERVICE') private readonly tokenClient: ClientProxy,
  ) {
  }
  async getOrders() {
    this.tokenClient.emit('test', {
      test: 'success',
    });
    return true
  }
}
