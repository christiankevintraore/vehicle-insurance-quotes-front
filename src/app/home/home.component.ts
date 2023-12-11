import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Quote, QuoteService, Car, QuoteRequest } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private removeNullProps = (data: object): object => Object.
  fromEntries(Object.entries(data).filter(([_, v]) => v != null));

  isLoading = false;
  isFormInvalid = false;
  carsList: Car[] | null = null;
  selectedCarId: string | null = null;
  carsForm: FormGroup;
  insuranceForm: FormGroup;

  constructor(private quoteService: QuoteService, private router: Router,
  private fb: FormBuilder, private changeDetectorRef: ChangeDetectorRef) {
    this.carsForm = this.fb.group({
      Category: [null],
      Make: [null],
      Model: [null],
      Year: [null],
    });

    this.insuranceForm = this.fb.group({
      age: [null, [Validators.required, Validators.min(7)]],
      drivingExperience: [null, Validators.required],
      driverRecord: [null, Validators.required],
      claims: [null, Validators.required],
      carValue: [null, Validators.required],
      annualMileage: [null, Validators.required],
      insuranceHistory: [null, Validators.required],
    });
  }

  ngOnInit() {}

  carsFormFieldChanged() {
    const category = this.carsForm.get('Category')?.value;
    const make = this.carsForm.get('Make')?.value;
    const model = this.carsForm.get('Model')?.value;
    const year = this.carsForm.get('Year')?.value;

    const carInfo = this.removeNullProps({category, make, model, year});

    if (category || make || model || year) {
      this.quoteService.getCars({ carInfo })
      .subscribe((cars: Car[]) => {
        this.carsList = cars;
        if (this.carsList?.length === 1) {
          this.selectedCarId = this.carsList[0].id || null;
        }
      });
    }
  }

  updateCarFields() {
    const selectedCar = this.carsList?.
      find(car => car.id === this.selectedCarId);

    if (selectedCar) {
      this.carsForm.patchValue({
        Year: selectedCar.Year,
        Model: selectedCar.Model,
        Make: selectedCar.Make,
        Category: selectedCar.Category,
      });
      this.changeDetectorRef.detectChanges();
    }
  }

  getQuote(request: QuoteRequest) {
    this.isLoading = true;

    this.quoteService
      .getQuote({ request })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: Quote) => {
        this.router.navigate(['/quote', { ...this.removeNullProps(quote) } ]);
      });
  }

  submitForm() {
    const isFormValid = this.insuranceForm.valid;
    this.isFormInvalid = !isFormValid;
    if (this.selectedCarId && isFormValid) {
      const formData: QuoteRequest = {
        ...this.insuranceForm.value,
        carId: this.selectedCarId,
      };
      console.log(formData);
      this.getQuote(formData);
    } else {
      console.log('Le formulaire est invalide.');
    }
  }
}
