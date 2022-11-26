import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { CarsViewComponent } from './cars-view/cars-view.component';
import { CarFormComponent } from './car-form/car-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsTableComponent,
    CarsViewComponent,
    CarFormComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
