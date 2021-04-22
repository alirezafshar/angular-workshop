import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { CountriesList } from 'src/app/models/countries-list.model';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  countries: CountriesList[] = [
    { id: 1, name: 'Iran' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'United States' },
  ];
  contact!: Contact;

  @ViewChild('contactForm') contactForm!: NgForm;

  constructor() {}

  ngOnInit(): void {
    this.contact = {
      firstName: 'Sachin',
      lastName: 'Tendulkar',
      email: 'sachin@gmail.com',
      gender: 'male',
      isMarried: false,
      country: 0,
      address: {
        cityName: 'Toronto',
        streetName: 'Perry Cross Rd',
        pin: '400050',
      },
    };
  }

    //##update the entire FormGroup
    setDefault() {
      this.contactForm.setValue(this.contact);
    }


  //##update part of the properties
  patchValue() {
    let obj = {
      gender: 'female',
      isMarried: true,
      country: 3,
    };

    this.contactForm.control.patchValue(obj);
  }

  //##update the nested form group separately
  changeAddress() {
    let obj = {
      cityName: 'Tehran',
      streetName: 'Aghdasiyeh',
      pin: '1234',
    };
    let address = this.contactForm.controls['address'] as FormGroup;
    address.patchValue(obj);
  }

  
  //##update the value of individual control
  changeCountry() {
    this.contactForm.controls['country'].setValue(1);
  }

  //##Another way:
  // changeCountry() {
  //   this.contact.country = 1;
  // }

  onSubmit(contactForm: NgForm) {
    console.log('contactForm: ', contactForm.value);
  }

  reset(contactForm: NgForm) {
    contactForm.resetForm();
  }
}
