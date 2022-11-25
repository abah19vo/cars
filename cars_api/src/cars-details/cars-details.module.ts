import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsDetails } from 'src/models/car-details.entity';
import { CarsDetailsService } from './cars-details-service/cars-details.service';
import { CarsDetailsController } from './cars-details.controller';

@Module({
     imports: [TypeOrmModule.forFeature([CarsDetails])],
     providers: [CarsDetailsService],
     controllers: [CarsDetailsController],
     exports : [CarsDetailsService]
})
export class CarsDetailsModule { }
