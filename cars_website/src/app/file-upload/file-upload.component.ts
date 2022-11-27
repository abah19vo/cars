import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarDetails } from '../models/car-details';
import { CarsApiService } from '../services/cars-api/cars-api.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  file: any;
  carsDetails: CarDetails[] = []

  constructor(private apiService: CarsApiService, private router: Router) { }

  async upload() {
    for (let car of this.carsDetails) {
      try {
        this.apiService.uploadCarDetails(car)
      } catch (e) {
        console.log(e)
      }

    }
    this.router.navigate(['/cars'])
  }

  fileChanged(e: any) {
    this.file = e.target.files[0];

    let fileReader = new FileReader();
    
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      let result = fileReader.result
      if (typeof (result) == 'string') {
        let cars: CarDetails[] = result.split('\n').map((car) => {
          return {
            identity: car.substring(0, 7),
            chassisNumber: car.substring(7, 7 + 19),
            modelYear: Number.parseInt(car.substring(26, 26 + 4)),
            typeApprovalNo: Number.parseInt(car.substring(30, 30 + 11)),
            firstRegistration: Number.parseInt(car.substring(41, 41 + 8)),
            privatelyImported: Number.parseInt(car[49]),
            deregisteredDate: Number.parseInt(car.substring(50, 50 + 8)),
            color: car.substring(58, 78),
            lastInspection: Number.parseInt(car.substring(78, 78 + 8)),
            nextInspection: Number.parseInt(car.substring(86, 86 + 8)),
            lastRegistration: Number.parseInt(car.substring(93, 93 + 8)),
            monthlyRegistration: Number.parseInt(car.substring(102, 102 + 4)),

          }
        })
        this.carsDetails = cars;
        console.log(cars)
      }
    }
    fileReader.readAsText(this.file);
  }
}
