import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesList } from 'src/app/models/countries-list.model';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  newCountry: string = '';
  defCountry: string = '';
  err: string = '';
  setErr: string = '';
  countries: CountriesList[] = [
    { id: '1', name: 'Iran' },
    { id: '2', name: 'Canada' },
    { id: '3', name: 'United States' },
  ];

  constructor(private FormBuilder: FormBuilder) {}

  contactForm = this.FormBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: [
      '',
      [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z]+$'),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
    isMarried: [false, [Validators.required]],
    country: ['0', [Validators.required]],
    address: this.FormBuilder.group({
      cityName: [''],
      streetName: [''],
      pin: ['', [Validators.required]],
    }),
  });

  ngOnInit(): void {}

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get pin() {
    return this.contactForm.get('addr ess')?.get('pin');
  }

  addCountry() {
    const hasCountry = this.countries.find(
      (item) => item.name === this.newCountry
    );
    if (!hasCountry && this.newCountry != '') {
      let lastId =
        Math.max.apply(
          Math,
          this.countries.map((item) => parseInt(item.id))
        ) + 1;
      this.countries.push({ id: lastId.toString(), name: this.newCountry });
      this.newCountry = '';
      this.err = '';
    } else if (this.newCountry == '') {
      this.err = 'Name of the country is required';
    } else {
      this.err = 'This country is already inside the list';
    }
  }

  setCountry() {
    let selectedCountry = this.countries.find(
      (item) => item.name === this.defCountry
    );
    if (selectedCountry) {
      console.log('def: ', selectedCountry);
      this.contactForm.get('country')?.patchValue(selectedCountry?.id);
    } else {
      this.setErr = 'There is not any same country in the list';
    }
  }

  onSubmit() {
    console.log('contact values: ', this.contactForm.value);
  }
}
