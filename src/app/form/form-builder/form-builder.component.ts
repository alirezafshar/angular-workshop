import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesList } from 'src/app/models/countries-list.model';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  countries: CountriesList[] = [
    { id: 1, name: 'Iran' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'United States' },
  ];

  constructor(private FormBuilder: FormBuilder) {}

  contactForm = this.FormBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-Z]+$')]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
    isMarried: ['', [Validators.required]],
    country: ['', [Validators.required]],
    address: this.FormBuilder.group({
      cityName: ['', [Validators.required]],
      streetName: ['', [Validators.required]],
      pin: ['', [Validators.required]],
    }),
  });

  ngOnInit(): void {}

  firstName() {
    return this.contactForm.get('firstName');
  }

  // lastName() {
  //   return this.contactForm.get('lastName');
  // }

  // email() {
  //   return this.contactForm.get('email');
  // }

  // gender() {
  //   return this.contactForm.get('gender');
  // }

  // isMarried() {
  //   return this.contactForm.get('isMarried');
  // }

  // country() {
  //   return this.contactForm.get('country');
  // }

  // cityName() {
  //   return this.contactForm.get('address')?.get('cityName');
  // }

  // StreetName() {
  //   return this.contactForm.get('address')?.get('streetName');
  // }

  // pin() {
  //   return this.contactForm.get('address')?.get('pin');
  // }

  onSubmit() {
    console.log('contact values: ', this.contactForm.value);
  }
}
