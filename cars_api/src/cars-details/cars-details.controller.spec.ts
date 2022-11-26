import { Test, TestingModule } from '@nestjs/testing';
import { CarsDetailsController } from './cars-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsDetails } from 'src/models/car-details.entity';
describe('CarsDetailsController', () => {
  let controller: CarsDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsDetailsController],
    }).compile();

    controller = module.get<CarsDetailsController>(CarsDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
