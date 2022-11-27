import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CarDetails } from '../../models/car-details';

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
    if (response.status != 200 || response.body == null) {
      throw Error(response.statusText)
    }
    return response.body;
  }

  async uploadCarDetails(carDetails: CarDetails): Promise<void> {
    let url = CarsApiService.baseCarsUrl + 'cars-details';

    let response = await firstValueFrom(this.http.post(url, carDetails, { observe: 'response', }))
    if (response.status != 201) {
      throw Error(response.statusText)
    }

  }

  async updateCarDetails(carDetails: CarDetails): Promise<void> {
    let url = CarsApiService.baseCarsUrl + 'cars-details/' + carDetails.identity;

    let response = await firstValueFrom(this.http.put(url, carDetails, { observe: 'response' }))
    if (response.status != 204) {
      throw Error(response.statusText)
    }

  }
  async deleteCarDetailsById(id: string|undefined) {
    let url = CarsApiService.baseCarsUrl + 'cars-details/' + id;
    await firstValueFrom(this.http.delete(url, { observe: 'response' }))
  }
}
