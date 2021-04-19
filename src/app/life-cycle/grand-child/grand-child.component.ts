import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
} from '@angular/core';
import { Clients } from 'src/app/models/clients.model';

@Component({
  selector: 'app-grand-child',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss'],
})
export class GrandChildComponent {
  @Input() clients!: Clients;

  constructor() {
    console.log('grand-life-cycle component: Constructure');
  }

  ngOnChanges(): void {
    console.log('grand-life-cycle component: OnChange');
  }

  ngOnInit(): void {
    console.log('grand-life-cycle component: OnInit');
  }

  ngDoCheck(): void {
    console.log('grand-life-cycle component: DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('grand-life-cycle component: AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('grand-life-cycle component: AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('grand-life-cycle component:  AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('grand-life-cycle component:  AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('grand-life-cycle component:  OnDestroy');
  }
}
