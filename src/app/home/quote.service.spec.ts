import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Car, Quote, QuoteRequest, QuoteService, QuoteStatus } from './quote.service';

describe('QuoteService', () => {
  let quoteService: QuoteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuoteService],
    });

    quoteService = TestBed.inject(QuoteService);
    httpMock = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getCars', () => {
    // Arrange
    const id = 'id1',
      Category = 'category1',
      Make = 'make1',
      Model = 'model';
    const mockCars: Car[] = [2018, 2019, 2020, 2021, 2022, 2023].map((Year) => {
      const result: Car = { id, Category, Make, Model, Year };
      return result;
    });

    it('should return a cars list', () => {
      // Act
      const getCarsSubscription = quoteService.getCars({ carInfo: { Category, Make, Model } });

      // Assert
      getCarsSubscription.subscribe((cars: Car[]) => {
        JSON.stringify(cars) === JSON.stringify(mockCars);
      });
      httpMock.expectOne({}).flush(mockCars);
    });

    it('should return a string in case of error', () => {
      // Act
      const getCarsSubscription = quoteService.getCars({ carInfo: { Category, Make, Model } });

      // Assert
      expect(getCarsSubscription.subscribe((cars: Car[]) => {})).toThrow(
        /Unable to get the cars list, please retry.*+/
      );
      httpMock.expectOne({}).flush(null, { status: 500, statusText: 'error' });
    });
  });

  describe('getQuote', () => {
    // Arrange
    const id = 'id1',
      category = 'category1',
      make = 'make1',
      model = 'model';
    const request: QuoteRequest = {
      age: 32,
      drivingExperience: 7,
      driverRecord: 1,
      claims: 0,
      carValue: 50000,
      annualMileage: 25000,
      insuranceHistory: 3,
      carId: 'carId',
    };
    const mockQuote: Quote = {
      id: 'id',
      status: QuoteStatus.SUCCESS,
      premium: 1980.0,
      requestId: 'requestId',
    };

    it('should return a cars list', () => {
      // Act
      const getQuoteSubscription = quoteService.getQuote({ request });

      // Assert
      getQuoteSubscription.subscribe((quote: Quote) => {
        expect(quote.id).toEqual(mockQuote.id);
        expect(quote.status).toEqual(mockQuote.status);
        expect(quote.premium).toEqual(mockQuote.premium);
        expect(quote.requestId).toEqual(mockQuote.requestId);
      });
      httpMock.expectOne({}).flush(mockQuote);
    });

    it('should return a string in case of error', () => {
      // Act
      const getQuoteSubscription = quoteService.getQuote({ request });

      // Assert
      expect(getQuoteSubscription.subscribe((quote: Quote) => {})).toThrow(/Unable to get the quote, please retry.*+/);
      httpMock.expectOne({}).flush(null, { status: 500, statusText: 'error' });
    });
  });
});
