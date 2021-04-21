import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { DataBindingComponent } from './data-binding.component';
import { FormsModule } from '@angular/forms';
import { CustomBindingComponent } from './custom-binding/custom-binding.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [DataBindingComponent, CustomBindingComponent],
  imports: [
    CommonModule,
    DataBindingRoutingModule,
    HomeModule,
    FormsModule
  ]
})
export class DataBindingModule { }
