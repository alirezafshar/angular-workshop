import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';


@NgModule({
  declarations: [FormComponent, TemplateComponent, ReactiveComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule
  ]
})
export class FormModule { }
