import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Car {
  id?: string;
  Category: string;
  Make: string;
  Model: string;
  Year: number;
}

export interface QuoteRequest {
  id?: string;
  age: number;
  drivingExperience: number;
  driverRecord: number;
  claims: number;
  carValue: number;
  annualMileage: number;
  insuranceHistory: number;
  carId: string;
}

export interface Quote {
  id?: string;
  status: string;
  premium: number;
  requestId: string;
}

const apiBaseRootUri: string = '/api/v1';
const routes = {
  getCars: () => `${apiBaseRootUri}/cars`,
  getQuote: () => `${apiBaseRootUri}/quotesrequest`,
};

export interface CarsRequestContext {
  carInfo: { [key: string]: any} | null;
}

export interface QuoteRequestContext {
  request: QuoteRequest;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  defaultOptions: object;

  constructor(private httpClient: HttpClient) {
    this.defaultOptions = {
      responseType: 'json'
    };
  }

  getCars(context: CarsRequestContext): Observable<Car[]> {
    const params = {...context.carInfo} || undefined;

    return this.httpClient.get(routes.getCars(), { ...this.defaultOptions, params }).pipe(
      map((body: any) => body)
    );
  }

  getQuote(context: QuoteRequestContext): Observable<Quote> {
    return this.httpClient.post(routes.getQuote(), context.request, { ...this.defaultOptions }).pipe(
      map((body: any) => body)
    );
  }
}
