import {
     Body,
     Controller,
     Delete,
     Get,
     HttpCode,
     HttpStatus,
     Param,
     Post,
     Put,
     Res
} from '@nestjs/common';
import { Response } from 'express';
import { CarsDetails } from 'src/models/car-details.entity';
import { QueryFailedError } from 'typeorm';
import { CarsDetailsService } from './cars-details-service/cars-details.service';

@Controller('cars-details')
export class CarsDetailsController {

     constructor(private carsDetailsService: CarsDetailsService) { }

     @Get()
     @HttpCode(200)
     async getAll(@Res() response: Response): Promise<void | CarsDetails[]> {
          return await this.carsDetailsService.findAll().catch((e) => {
               let code = e.code;
               if (e instanceof QueryFailedError) {
                    response.status(HttpStatus.BAD_REQUEST).json(code).send();
                    return;
               }
               response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e.message).send();
               return;
          }).then((results) => {
               response.json(results).send();
               return;
          });
     }

     @Get(':identity')
     @HttpCode(200)
     getCarById(@Param('identity') identity: string, @Res() response: Response): Promise<void | CarsDetails> {
          return this.carsDetailsService.findOneById(identity).catch((e) => {
               let code = e.code;
               if (e instanceof QueryFailedError) {
                    response.status(HttpStatus.BAD_REQUEST).json(code).send();
                    return;
               }

               response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e.message).send();
               return;
          }).then((results) => {
               response.json(results).send();
               return;
          });
     }

     @Post()
     @HttpCode(201)
     async save(@Body() createCatDto: CarsDetails, @Res() response: Response): Promise<void> {

          return await this.carsDetailsService.save(createCatDto).catch((e) => {
               let code = e.code;
               if (e instanceof QueryFailedError) {
                    response.status(HttpStatus.BAD_REQUEST).json(code).send();
                    return;
               }
               response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e.message).send();
               return;
          }).then((results) => {
               response.json(results).send();
               return;
          });
     }

     @Put(':identity')
     @HttpCode(204)
     updateCarById(
          @Param('identity') identity: string,
          @Body() createCatDto: CarsDetails,
          @Res() response: Response
     ): Promise<void> {
          return this.carsDetailsService.updateById(identity, createCatDto).catch((e) => {
               let code = e.code;
               if (e instanceof QueryFailedError) {
                    response.status(HttpStatus.BAD_REQUEST).json(code).send();
                    return;
               }
               response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e.message).send();
               return;
          }).then((results) => {
               response.json(results).send();
               return;
          });
     }
     @Delete(':identity')
     @HttpCode(204)
     deleteCarById(@Param('identity') identity: string, @Res() response: Response): Promise<void> {
          return this.carsDetailsService.delete(identity).catch((e) => {
               let code = e.code;
               if (e instanceof QueryFailedError) {
                    response.status(HttpStatus.BAD_REQUEST).json(code).send();
                    return;
               }
               response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e.message).send();
          }).then(() => {
               response.send();
          });
     }
}
