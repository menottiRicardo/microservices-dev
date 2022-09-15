import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { RmqService } from './rmq/rmq.service';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('BILLING'));
  await app.startAllMicroservices();
  logger.log('🚀 Token service started');
}
bootstrap();
