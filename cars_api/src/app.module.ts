import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsDetailsController } from './cars-details/cars-details.controller';
import { CarsDetailsModule } from './cars-details/cars-details.module';
import { CarsDetails } from './models/car-details.entity'
@Module({
  imports: [
    CarsDetailsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'cars-db-1', //when running the api via docker-compose
      //host: '127.0.0.1', 
      port: 3306,
      username: 'root',
      password: 'root',
      entities: [
        CarsDetails,
      ],
      autoLoadEntities: true,
      synchronize: true,
      database: 'root'
    }),
  ],
  controllers: [AppController, CarsDetailsController],
  providers: [AppService],
})
export class AppModule { }
