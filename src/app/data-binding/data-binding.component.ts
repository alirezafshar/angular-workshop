import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  title1 = 'binding style is: interpolation';
  item = undefined;
  title2 = 'binding style is: property binding';
  isDisabled = true;
  cssStringVar: string = 'green size20';
  cssObject: object = {
    red: true,
    green: false,
  };
  closeLabel = 'close';

  constructor() {}

  ngOnInit(): void {}

  interpolation = (number1: number, number2: number) => {
    return Math.max(number1, number2);
  };

  clickCounter = 0;
  clickMe = () => {
    return this.clickCounter++;
  };

  value!: string;
  handleInput = (element: any) => {
    this.value = element.target.value;
  };

  newVal!: string;
  handleVal = (element: any) => {
    this.newVal = element.value;
  };

  val!: string;

  name = '';
  clearName = () => {
    this.name = '';
  };

  inputValues!: any;
  clearValue = () => {
    this.inputValues = '';
  };

  count: number = 0;
  clearCount = () => {
    this.count = 0;
  }

  fnameChange = (arg: any) => {
    console.log("modelChange: ", arg)
  }
}
