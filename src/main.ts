import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { START_SERVER } from './constants/app.constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from './pipes/validation.pipe';
import * as cors from 'cors';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  // app.useGlobalPipes(new ValidationPipe());
  app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));
  // app.use(
  //   cors({ origin: 'https://shop.shelludko.com', optionsSuccessStatus: 200 }),
  // );

  const config = new DocumentBuilder()
    .setTitle('NestJS')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(PORT, () => {
    return START_SERVER(PORT);
  });
}

start();
