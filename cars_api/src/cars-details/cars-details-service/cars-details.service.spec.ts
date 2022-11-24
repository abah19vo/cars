import { Test, TestingModule } from '@nestjs/testing';
import { CarsDetailsService } from './cars-details.service';

describe('CarsDetailsService', () => {
  let service: CarsDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsDetailsService],
    }).compile();

    service = module.get<CarsDetailsService>(CarsDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
