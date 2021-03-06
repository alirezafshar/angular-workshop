import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { HomeModule } from '../home/home.module';
import { ValueChangesComponent } from './value-changes/value-changes.component';
import { FormArrayComponent } from './form-array/form-array.component';

@NgModule({
  declarations: [
    FormComponent,
    TemplateComponent,
    ReactiveComponent,
    FormBuilderComponent,
    ValueChangesComponent,
    FormArrayComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FormModule {}
