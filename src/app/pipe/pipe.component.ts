import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  todayDate: Date = new Date();
  msg: string = "WelcOMe to anGular Alireza!";
  views: string = "1923.34565";
  price: number = 234.564;

  constructor() { }

  ngOnInit(): void {
  }

}
