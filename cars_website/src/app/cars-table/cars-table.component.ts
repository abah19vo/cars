import { Component } from '@angular/core';
import { CarDetails } from '../models/car-details';
import { CarsApiService } from '../services/cars-api.service';

@Component({
  selector: 'cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss']
})
export class CarsTableComponent {
  constructor(private apiService: CarsApiService) { }
  carsDetails: CarDetails[] = []

  async ngOnInit() {
    this.carsDetails = await this.apiService.getAllCarsDetails();
    console.log(this.carsDetails);
  }



}
