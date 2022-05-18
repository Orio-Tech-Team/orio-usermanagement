import {ValidationPipe } from '@nestjs/common';
import { NestFactory} from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Consumer API example')
    .setDescription('The consumer application API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('explorer', app, document);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
}
bootstrap();
