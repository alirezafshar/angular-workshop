import {
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  OnInit,
  Input,
} from '@angular/core';
import { Clients } from 'src/app/models/clients.model';

@Component({
  selector: 'app-child-of-cycle',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './child-of-cycle.component.html',
  styleUrls: ['./child-of-cycle.component.scss'],
})
export class ChildOfCycleComponent {
  @Input() message!: string;
  clients: Clients = new Clients();

  constructor() {
    console.log('child-life-cycle component: Constructure');
  }

  ngOnChanges(): void {
    console.log('child-life-cycle component: OnChange');
  }

  ngOnInit(): void {
    console.log('child-life-cycle component: OnInit');
  }

  ngDoCheck(): void {
    console.log('child-life-cycle component: DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('child-life-cycle component: AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('child-life-cycle component: AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('child-life-cycle component:  AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('child-life-cycle component:  AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('child-life-cycle component:  OnDestroy');
  }
}
