import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { CarFormComponent } from './car-form/car-form.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarsTableComponent,
    CarFormComponent,
    FileUploadComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
