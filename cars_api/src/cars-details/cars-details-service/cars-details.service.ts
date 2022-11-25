import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CarsDetails } from 'src/models/car-details.entity';

@Injectable()
export class CarsDetailsService {
     constructor(
          @InjectRepository(CarsDetails)
          private carsDetailsrepository: Repository<CarsDetails>,
     ) { }

     findAll(): Promise<CarsDetails[]> {
          return this.carsDetailsrepository.find({
               order: {
                    nextInspection: {
                         direction: "ASC"
                    }
               }
          });
     }

     findOneById(identity: string): Promise<CarsDetails> {
          return this.carsDetailsrepository.findOneBy({ identity });
     }

     async delete(identity: string): Promise<void> {
          await this.carsDetailsrepository.delete(identity);
     }

     async updateById(identity: string, carDetails: CarsDetails): Promise<void> {
          await this.carsDetailsrepository.update(identity, carDetails);
     }
     async save(carDetails: CarsDetails): Promise<void> {
          await this.carsDetailsrepository.save(carDetails);
     }
}
