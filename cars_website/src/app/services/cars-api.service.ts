import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CarDetails } from '../models/car-details';

@Injectable({
  providedIn: 'root'
})
export class CarsApiService {

  constructor(private http: HttpClient) { }

  static baseCarsUrl = '127.0.0.1:3000/'

  async getAllCarsDetails(): Promise<CarDetails[]> {
    this.http.get<CarDetails[]>(CarsApiService.baseCarsUrl + 'cars-details', {
      observe: 'response',
    })
    return [];
  }
  async getCarDetailsById(id: string): Promise<CarDetails> {
    let url = CarsApiService.baseCarsUrl + 'cars-details/' + id;

    let response = await firstValueFrom(this.http.get<CarDetails>(url, { observe: 'response' }))

    if (response.status != 200 || response.body == null) {
      throw Error(response.statusText)
    }
    return response.body;
  }


}
