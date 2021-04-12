import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-binding',
  template: `<p>Child Count: {{count}}</p>
            <button (click)=(increments())>Increment</button>`
})
export class CustomBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter()

  increments = () => {
    this.count++;
    this.countChange.emit(this.count)
  }

}
