import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-variable',
  templateUrl: './local-variable.component.html',
  styleUrls: ['./local-variable.component.scss']
})
export class LocalVariableComponent implements OnInit {
  numbers: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  up = () => {
    this.numbers++;
  }

  down = () => {
    this.numbers--;
  }

}
