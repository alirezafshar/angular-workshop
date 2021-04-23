import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  constructor(private FormBuilder: FormBuilder) {}

  employessForm = this.FormBuilder.group({
    employees: this.FormBuilder.array([]),
  });

  ngOnInit(): void {}

  get employees(): FormArray {
    console.log('form employees getter: ', this.employessForm.get('employees'));
    return this.employessForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.FormBuilder.group({
      fname: '',
      lname: '',
      skill: this.FormBuilder.array([]),
    });
  }

  addEmployee() {
    this.employees.push(this.newEmployee());
  }

  removeEmployees(i: number) {
    this.employees.removeAt(i);
  }

  //Getter cannot have parameters
  skills(i: number) {
    console.log('from skills getter:', this.employees.at(i).get('skill'));
    return this.employees.at(i).get('skill') as FormArray;
  }

  newSkill(): FormGroup {
    return this.FormBuilder.group({
      skill: '',
      exp: '',
    });
  }

  addSkill(i: number) {
    this.skills(i).push(this.newSkill());
  }

  removeSkill(i: number, j: number) {
    this.skills(i).removeAt(j);
  }

  onSubmit() {
    console.log('output: ', this.employees.value);
  }
}
