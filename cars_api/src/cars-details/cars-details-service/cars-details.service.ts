import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';

import { CarsDetails } from 'src/models/car-details.entity';

@Injectable()
export class CarsDetailsService {
     constructor(
          @InjectRepository(CarsDetails)
          private carsDetailsrepository: Repository<CarsDetails>,
     ) { }

     findAll(): Promise<CarsDetails[]> {
          try {
               return this.carsDetailsrepository.find({
                    order: {
                         nextInspection: {
                              direction: "ASC"
                         }
                    }
               });
          } catch (error) {
               this.handleError(error);
          }
     }

     findOneById(identity: string): Promise<CarsDetails> {
          try {
               return this.carsDetailsrepository.findOneByOrFail({ identity });
          } catch (error) {
               this.handleError(error);
          }
     }

     async delete(identity: string): Promise<void> {
          try {
               await this.carsDetailsrepository.delete(identity);
          } catch (error) {
               this.handleError(error);
          }
     }

     async updateById(identity: string, carDetails: CarsDetails): Promise<void> {
          try {
               await this.carsDetailsrepository.update(identity, carDetails);

          } catch (error) {
               this.handleError(error);
          }
     }
     async save(carDetails: CarsDetails): Promise<void> {
          try {
               await this.carsDetailsrepository.save(carDetails);

          } catch (error) {
               this.handleError(error);
          }
     }

     private handleError(error: any) {
          if (error instanceof QueryFailedError) {
               throw error;
          }
          throw Error('InternalError');
     }
}
