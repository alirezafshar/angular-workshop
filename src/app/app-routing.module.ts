import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'binding',
    loadChildren: () =>
      import('./data-binding/data-binding.module').then(
        (m) => m.DataBindingModule
      ),
  },
  {
    path: 'directive',
    loadChildren: () =>
      import('./directive/directive.module').then((m) => m.DirectiveModule),
  },
  {
    path: 'pipe',
    loadChildren: () => import('./pipe/pipe.module').then((m) => m.PipeModule),
  },
  {
    path: 'pass-data',
    loadChildren: () =>
      import('./passing-data/passing-data.module').then(
        (m) => m.PassingDataModule
      ),
  },
  {
    path: 'life-cycle',
    loadChildren: () =>
      import('./life-cycle/life-cycle.module').then((m) => m.LifeCycleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
