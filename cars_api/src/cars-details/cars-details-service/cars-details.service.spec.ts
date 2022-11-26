import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsDetails } from 'src/models/car-details.entity';
import { CarsDetailsService } from './cars-details.service';

describe('CarsDetailsService', () => {
  let service: CarsDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsDetailsService],
      imports: [TypeOrmModule.forFeature([CarsDetails])],

    }).compile();

    service = module.get<CarsDetailsService>(CarsDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
