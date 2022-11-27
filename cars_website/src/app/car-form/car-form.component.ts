import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetails } from '../models/car-details';
import { CarsApiService } from '../services/cars-api/cars-api.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent {
  carDetails: CarDetails = {
    chassisNumber: "",
    color: "",
    deregisteredDate: 1,
    firstRegistration: 1,
    lastInspection: 1,
    lastRegistration: 1,
    modelYear: 1900,
    monthlyRegistration: 1,
    nextInspection: 1,
    privatelyImported: 0,
    typeApprovalNo: 0,
  }
  constructor(private activatedRoute: ActivatedRoute, private apiService: CarsApiService, private router: Router) {
    this.activatedRoute.params.subscribe(async params => {
      if (params['id']) {
        this.carDetails = await apiService.getCarDetailsById(params['id']);
      }
    });
  }

  upload(): void {
    this.apiService.uploadCarDetails(this.carDetails);
    this.router.navigate(['/cars'])

  }

  update(): void {
    this.apiService.updateCarDetails(this.carDetails);
    this.router.navigate(['/cars'])

  }
  delete(): void {
    this.apiService.deleteCarDetailsById(this.carDetails.identity);
    this.router.navigate(['/cars'])
  }
}
