import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from '../models/Car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl: string;
  carsRoute: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8762';
    this.carsRoute = '/api/cars/';
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}${this.carsRoute}`);
  }

}

