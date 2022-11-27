import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { CarFormComponent } from './car-form/car-form.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cars',
    pathMatch: 'full'
  },
  { path: 'cars', component: CarsTableComponent, },
  { path: 'car-form', component: CarFormComponent, },
  { path: 'file-upload', component: FileUploadComponent, },

  { path: 'car-form/:id', component: CarFormComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
