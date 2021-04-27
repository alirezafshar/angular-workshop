import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './reusable-service-routing.module';
import { ReusableServiceComponent } from './reusable-service.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [ReusableServiceComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    HomeModule
  ]
})
export class ReusableServiceModule { }
