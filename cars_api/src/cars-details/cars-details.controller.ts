import {
     Body,
     Controller,
     Delete,
     Get,
     HttpCode,
     HttpException,
     HttpStatus,
     Param,
     Post,
     Put,
     Res
} from '@nestjs/common';
import { CarsDetails } from 'src/models/car-details.entity';
import { EntityNotFoundError, QueryFailedError } from 'typeorm';
import { CarsDetailsService } from './cars-details-service/cars-details.service';

@Controller('cars-details')
export class CarsDetailsController {

     constructor(private carsDetailsService: CarsDetailsService) { }

     @Get()
     @HttpCode(200)
     async getAll(): Promise<CarsDetails[]> {
          try {
               let res = await this.carsDetailsService.findAll();
               if (res.length == 0) throw new HttpException('No content', HttpStatus.NO_CONTENT);
               return res;

          } catch (e) {
               if(e instanceof HttpException) throw e
               throw new HttpException('INTERNAL SERVER ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
          }
     }

     @Get(':identity')
     @HttpCode(200)
     async getCarById(@Param('identity') identity: string): Promise<CarsDetails> {


          try {
               return await this.carsDetailsService.findOneById(identity);
          } catch (e) {
               
               if (e instanceof EntityNotFoundError) {
                    throw new HttpException('Not Found', HttpStatus.NO_CONTENT);
               }
               throw new HttpException('INTERNAL SERVER ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
          }
     }

     @Post()
     @HttpCode(201)
     async save(@Body() createCatDto: CarsDetails): Promise<void> {

          try {
               return await this.carsDetailsService.save(createCatDto)

          } catch (e) {
               let code = e.code;
               if (e instanceof QueryFailedError) {
                    throw new HttpException(code, HttpStatus.BAD_REQUEST);
               }
               throw new HttpException('INTERNAL SERVER ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
          }

     }

     @Put(':identity')
     @HttpCode(204)
     updateCarById(
          @Param('identity') identity: string,
          @Body() createCatDto: CarsDetails,
     ): Promise<void> {


          try {
               return this.carsDetailsService.updateById(identity, createCatDto);

          } catch (e) {
               let code = e.code;
               if (e instanceof QueryFailedError) {
                    throw new HttpException(code, HttpStatus.BAD_REQUEST);
               }
               throw new HttpException('INTERNAL SERVER ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
          }
     }
     @Delete(':identity')
     @HttpCode(204)
     deleteCarById(@Param('identity') identity: string): Promise<void> {

          try {
               return this.carsDetailsService.delete(identity);
          } catch (e) {
               let code = e.code;
               if (e instanceof QueryFailedError) {
                    throw new HttpException(code, HttpStatus.BAD_REQUEST);
               }
               throw new HttpException('INTERNAL SERVER ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
          }
     }
}
