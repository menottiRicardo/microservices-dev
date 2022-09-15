import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/test")
  async getOrders() {
    return this.appService.getOrders();
  }

  // @Get('/forgot-password')
  // getForgotPassword(@CurrentUser() auth: number): Promise<Token> {
  //   return this.appService.getForgotPasswordToken(auth);
  // }

  // @Put('/change-password')
  // changePassword(
  //   @Body() data: ForgotPasswordDto,
  //   @CurrentUser() auth: number,
  // ): Promise<void> {
  //   return this.appService.changePassword(data, auth);
  // }
}
