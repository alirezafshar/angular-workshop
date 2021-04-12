import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassingDataComponent } from './passing-data.component';

const routes: Routes = [{ path: '', component: PassingDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassingDataRoutingModule { }
