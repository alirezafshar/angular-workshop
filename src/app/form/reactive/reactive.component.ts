import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
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
    country: new FormControl(0),
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

  contact!: Contact;

  constructor() {}

  ngOnInit(): void {
    this.contact = {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      isMarried: true,
      country: 0,
      address: {
        cityName: '',
        streetName: '',
        pin: '',
      },
    }
  }

  setDefault() {
    this.contact = {
      firstName: 'Rahul',
      lastName: 'Dravid',
      email: 'rahul@gmail.com',
      gender: 'male',
      isMarried: true,
      country: 1,
      address: {
        cityName: 'Bangalore',
        streetName: 'Brigade Road',
        pin: '600070',
      },
    };

    this.contactForm.setValue(this.contact);
  }

  patchValues() {
    let newPatch = {
      firstName: 'Alireza',
      lastName: 'Afshar',
      country: 2,
      address: {
        cityName: 'Toronto',
      },
    };

    this.contactForm.patchValue(newPatch);
  }

  onSubmit() {
    console.log('Contact Form Val: ', this.contactForm.value);
  }
}
