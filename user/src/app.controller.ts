import { Body, Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';


@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  @UseGuards(JwtAuthGuard)
  async getOrders(@Req() req:any) {
    console.log('user',req.user)
    return this.appService.getOrders();
  }
}
