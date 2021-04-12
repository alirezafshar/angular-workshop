import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements OnInit {
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  increment = () => {
    this.counter++;
  };

  decrement = () => {
    this.counter--;
  };

  reset = () => {
    this.counter = 0;
  }
}
