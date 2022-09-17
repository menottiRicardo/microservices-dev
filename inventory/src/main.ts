import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { OrdersModule } from './inventory.module';
import { ConfigService } from '@nestjs/config';
import { RmqService } from './rmq/rmq.service';
import { RmqOptions } from '@nestjs/microservices';
const docsEndpoint = '/docs';
const title = process.env.USER_HOST;

function configureSwagger(app): void {
  const config = new DocumentBuilder()
    .setTitle(title)
    .setDescription('API Description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions('AUTH', true));
  const configService = app.get(ConfigService);
  configureSwagger(app);
  await app.startAllMicroservices();

  await app.listen(configService.get('PORT'));
  console.log(`🚀 Order service running on port ${configService.get('PORT')}`, configService.get("RABBITMQ_AUTH_QUEUE"));
}
bootstrap();
