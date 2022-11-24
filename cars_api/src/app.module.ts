import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsDetailsController } from './cars-details/cars-details.controller';

@Module({
  imports: [],
  controllers: [AppController, CarsDetailsController],
  providers: [AppService],
})
export class AppModule {}
