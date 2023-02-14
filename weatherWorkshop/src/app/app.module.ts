import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherService } from './services/weather.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCityComponent } from './components/list-city.component';
import { AddCityComponent } from './components/add-city.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDetailsComponent } from './components/weather-details.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ListCityComponent,
    AddCityComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
