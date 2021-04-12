import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassingDataRoutingModule } from './passing-data-routing.module';
import { PassingDataComponent } from './passing-data.component';
import { ChildComponent } from './child/child.component';
import { ViewChildComponent } from './view-child/view-child.component';


@NgModule({
  declarations: [PassingDataComponent, ChildComponent, ViewChildComponent],
  imports: [
    CommonModule,
    PassingDataRoutingModule
  ]
})
export class PassingDataModule { }
