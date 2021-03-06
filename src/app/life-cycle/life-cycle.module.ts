import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleRoutingModule } from './life-cycle-routing.module';
import { LifeCycleComponent } from './life-cycle.component';
import { ChildOfCycleComponent } from './child-of-cycle/child-of-cycle.component';
import { FormsModule } from '@angular/forms';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    LifeCycleComponent,
    ChildOfCycleComponent,
    GrandChildComponent,
  ],
  imports: [CommonModule, LifeCycleRoutingModule, HomeModule, FormsModule],
})
export class LifeCycleModule {}
