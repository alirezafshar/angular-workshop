import { Component, ChangeDetectionStrategy, VERSION } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent {
  name: string = 'Angular' + VERSION.major;
  message: string = 'Hello';
  content: string = 'Hello';
  hideChild = false;

  constructor() {
    console.log('life-cycle component: Constructure');
  }

  ngOnChanges(): void {
    console.log('life-cycle component: OnChange');
  }

  ngOnInit(): void {
    console.log('life-cycle component: OnInit');
  }

  ngDoCheck(): void {
    console.log('life-cycle component: DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('life-cycle component: AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('life-cycle component: AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('life-cycle component:  AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('life-cycle component:  AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('life-cycle component:  OnDestroy');
  }
}
