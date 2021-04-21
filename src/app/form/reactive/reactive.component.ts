import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesList } from 'src/app/models/countries-list.model';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl({ value: 'alireza', disabled: true }),
    lastName: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      cityName: new FormControl(),
      streetName: new FormControl(),
      pin: new FormControl(),
    }),
  });

  countries: CountriesList[] = [
    { id: 1, name: 'Iran' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'United States' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Contact Form Val: ', this.contactForm.value);
  }
}
