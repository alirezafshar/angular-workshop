import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormComponent } from './form.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
import { ValueChangesComponent } from './value-changes/value-changes.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      { path: 'template', component: TemplateComponent },
      { path: 'reactive', component: ReactiveComponent },
      { path: 'formBuilder', component: FormBuilderComponent },
      { path: 'valueChanges', component: ValueChangesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
