import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getOrders() {
    return this.appService.getOrders();
  }
}
