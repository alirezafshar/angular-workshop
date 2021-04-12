import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  templateUrl: './structural-dir.component.html',
  styleUrls: ['./structural-dir.component.scss'],
})
export class StructuralDirComponent implements OnInit {
  num: string = '';
  checkMe: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
