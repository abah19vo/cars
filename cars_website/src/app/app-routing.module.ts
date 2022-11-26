import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsViewComponent } from './cars-view/cars-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cars',
    pathMatch: 'full'
  },

  {
    path:'/cars',
    component: CarsViewComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
