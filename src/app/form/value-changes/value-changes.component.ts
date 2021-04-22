import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { CountriesList } from 'src/app/models/countries-list.model';

@Component({
  selector: 'app-value-changes',
  templateUrl: './value-changes.component.html',
  styleUrls: ['./value-changes.component.scss'],
})
export class ValueChangesComponent implements OnInit {
  constructor(private FormBuilder: FormBuilder) {}

  contactForm = this.FormBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['afshar'],
    email: ['alireza@example.com'],
    gender: ['male'],
    isMarried: [true],
    country: [1],
    address: this.FormBuilder.group({
      cityName: ['Tehran'],
      streetName: ['18'],
      pin: ['123'],
    }),
  });

  countries: CountriesList[] = [
    { id: 1, name: 'Iran' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'United States' },
  ];

  contact: Contact = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    isMarried: false,
    country: 0,
    address: {
      cityName: '',
      streetName: '',
      pin: '',
    },
  };

  ngOnInit(): void {
    this.contactForm.get('firstName')?.valueChanges.subscribe((data) => {
      console.log('Form Control Value Changes View: ', data); //on time value in contorol view
      console.log('Control Value: ', this.contactForm.get('firstName')?.value); //on time value
      console.log('Old Value: ', this.contactForm.value); //old value
    });

    this.contactForm.valueChanges.subscribe((data) => {
      console.log('Form Group Value Changes view: ', data); //on time value in parent view
    });
  }

  withOnlySelf() {
    //changes will only affect only this FormControl and change is not bubbled up to its parent
    this.contactForm.get('firstName')?.setValue('', { onlySelf: true });
  }

  withEmitEvent() {
    //the ValueChanges event is not fired at all
    this.contactForm.get('firstName')?.setValue('', { emitEvent: false });
  }

  onSubmit() {
    console.log('onSubmit: ', this.contactForm);
    console.log('firstName Errors: ', this.contactForm.get('firstName')?.errors);
  }
}
