import { Component, OnChanges, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnChanges {
  constructor() {}

  ngOnInit(): void {}

  @Input() count: number = 0;

  //Make a lifecycle for count
  ngOnChanges(changes: SimpleChanges) {
    for (let property in changes) {
      if (property === 'count') {
        console.log('prev: ', changes[property].previousValue);
        console.log('current: ', changes[property].currentValue);
        console.log('first: ', changes[property].firstChange);
      }
    }
  }

  @Output() refreshNum: EventEmitter<number> = new EventEmitter();

  resetNum = () => {
    this.refreshNum.emit(0)
  }
}
