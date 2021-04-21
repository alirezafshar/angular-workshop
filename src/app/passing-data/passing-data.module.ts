import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassingDataRoutingModule } from './passing-data-routing.module';
import { PassingDataComponent } from './passing-data.component';
import { ChildComponent } from './child/child.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { LocalVariableComponent } from './local-variable/local-variable.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [PassingDataComponent, ChildComponent, ViewChildComponent, LocalVariableComponent],
  imports: [
    CommonModule,
    PassingDataRoutingModule,
    HomeModule
  ]
})
export class PassingDataModule { }
