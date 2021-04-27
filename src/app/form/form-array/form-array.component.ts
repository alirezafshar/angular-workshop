import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  constructor(private FormBuilder: FormBuilder) {}

  employeesForm = this.FormBuilder.group({
    employees: this.FormBuilder.array([]),
  });

  ngOnInit(): void {}

  get employees(): FormArray {
    return this.employeesForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.FormBuilder.group({
      fname: '',
      lname: '',
      skills: this.FormBuilder.array([]),
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
    return this.employees.at(i).get('skills') as FormArray;
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

  setDefaultVal() {
    let defaultData = {
      employees: [
        {
          fname: 'alireza',
          lname: 'afshar',
          skills: [
            { skill: 'php', exp: '3' },
            { skill: 'dnn', exp: '3' },
            { skill: 'react', exp: '2' },
            { skill: 'angular', exp: null },
          ],
        },
      ],
    };

    this.employeesForm.patchValue(defaultData);
  }

  onSubmit() {
    console.log('output: ', this.employees.value);
  }

  clearVal() {
    this.employees.clear();
  }
}
