import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var cors = require('cors');


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  let port = 3000

  app.enableCors();

  app.enableCors();
  await app.listen(port);
}
bootstrap();
