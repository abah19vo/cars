import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { CarsDetails } from 'src/models/car-details.entity';
import { CarsDetailsService } from './cars-details-service/cars-details.service';

@Controller('cars-details')
export class CarsDetailsController {

     constructor(private carsDetailsService: CarsDetailsService) { }

     @Get()
     @HttpCode(200)
     getAll(): Promise<CarsDetails[]> {
          return this.carsDetailsService.findAll();
     }

     @Get(':identity')
     @HttpCode(200)
     getCarById(@Param('identity') identity: string): Promise<CarsDetails> {
          return this.carsDetailsService.findOneById(identity);
     }

     @Post()
     @HttpCode(201)
     save(@Body() createCatDto: CarsDetails): Promise<void> {
          return this.carsDetailsService.save(createCatDto);

     }
     @Put(':identity')
     @HttpCode(204)
     updateCarById(@Param('identity') identity: string, @Body() createCatDto: CarsDetails): Promise<void> {
          return this.carsDetailsService.updateById(identity, createCatDto);
     }
     @Delete(':identity')
     @HttpCode(204)
     deleteCarById(@Param('identity') identity: string): Promise<void> {
          return this.carsDetailsService.delete(identity);
     }
}
