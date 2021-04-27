import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReusableServiceComponent } from './reusable-service.component';

const routes: Routes = [{ path: '', component: ReusableServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
