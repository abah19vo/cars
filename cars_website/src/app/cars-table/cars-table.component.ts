import { Component } from '@angular/core';
import { CarDetails } from '../models/car-details';

@Component({
  selector: 'cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss']
})
export class CarsTableComponent {
  carsDetails: CarDetails[] = [
    {
      identity: "dasdas",
      chassisNumber: "adsdasd",
      color: 1,
      deregisteredDate: "dasda",
      firstRegistration: 200,
      lastInspection: 12313,
      lastRegistration: 13213,
      modelYear: 2000,
      monthlyRegistration: 3123,
      nextInspection: 12312,
      privatelyImported: 1231,
      typeApprovalNo: 1231231

    },
    {
      identity: "dasddasdasdas",
      chassisNumber: "adsdsadadasd",
      color: 1,
      deregisteredDate: "dasda",
      firstRegistration: 200,
      lastInspection: 12313,
      lastRegistration: 13213,
      modelYear: 2000,
      monthlyRegistration: 3123,
      nextInspection: 12312,
      privatelyImported: 1231,
      typeApprovalNo: 1231231

    },
  ]

}
