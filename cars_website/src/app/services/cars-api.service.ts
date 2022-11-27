import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CarDetails } from '../models/car-details';

@Injectable({
  providedIn: 'root'
})
export class CarsApiService {

  constructor(private http: HttpClient) {
  }

  static baseCarsUrl = 'http://localhost:3000/'

  async getAllCarsDetails(): Promise<CarDetails[]> {
    let response = await firstValueFrom(this.http.get<CarDetails[]>(CarsApiService.baseCarsUrl + 'cars-details', {
      observe: 'response',
    }))
    if (response.status != 200 || response.body == null) {
      throw Error(response.statusText)
    }
    return response.body;
  }

  async getCarDetailsById(id: string): Promise<CarDetails> {
    let url = CarsApiService.baseCarsUrl + 'cars-details/' + id;

    let response = await firstValueFrom(this.http.get<CarDetails>(url, { observe: 'response', }))
    console.log(response);
    if (response.status != 200 || response.body == null) {
      throw Error(response.statusText)
    }
    return response.body;
  }


}
