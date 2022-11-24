import { Body, Controller, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CarsDetails } from 'src/models/car-details';
import { CarsDetailsService } from './cars-details-service/cars-details.service';

@Controller('cars-details')
export class CarsDetailsController {

     constructor(private carsDetailsService: CarsDetailsService) { }

     @Get()
     getAll(): CarsDetails[] {
          return [];
     }

     @Get(':id')
     @HttpCode(201)
     getCarById(@Param('id') id: string): CarsDetails {
          return {} as CarsDetails;
     }

     @Post()
     @HttpCode(201)
     getCarBy(@Body() createCatDto: CarsDetails) {

     }
     @Put(':id')
     @HttpCode(204)
     updateCarById(@Param('id') id: string, @Body() createCatDto: CarsDetails) {
          return {} as CarsDetails;
     }
}
