import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-passing-data',
  templateUrl: './passing-data.component.html',
  styleUrls: ['./passing-data.component.scss'],
})
export class PassingDataComponent implements OnInit {
  increment: number = 0;

  constructor() {}

  ngOnInit(): void {}

  increaseNum = () => {
    this.increment++;
  };

  decreaseNum = () => {
    this.increment--;
  };

  resetFunction = (reset: number) => {
    this.increment = reset;
  };

  @ViewChild(ViewChildComponent) child!: ViewChildComponent;

  goup = () => {
    this.child.increment();
  };

  godown = () => {
    this.child.decrement();
  };

  refresh = () => {
    this.child.reset();
  };
}
