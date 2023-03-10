import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Weather } from '../model/Weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy{

  OPENWEATHER_API_KEY = environment.openweather_api_key;
  city: string = "Singapore";
  countryName?: string;
  imageUrl?: string
  model = new Weather("Singapore", 0,0,0,"",0,0,"");
  params$!: Subscription;

  constructor(private weatherSvc:WeatherService, private activatedRoute: ActivatedRoute, private router: Router) {
  } 

  ngOnInit(): void {
      console.log("ngOnInit....")
      this.params$ = this.activatedRoute.params.subscribe(
        (params) => {
          console.log("param val : " + params['city']);
          this.city = params['city'];
        }
      );
      console.log(this.city);
      this.getWeatherFromAPI(this.city);
  }

  ngOnDestroy(): void {	
    console.log("destroy subscription observable!")	
    this.params$.unsubscribe()
  }

  getWeatherFromAPI(city: string) {
    this.weatherSvc.getWeather(city, this.OPENWEATHER_API_KEY)
      .then((result) => {
        this.model = new Weather(
          city,
          result.main.temp,
          result.main.pressure,
          result.main.humidity,
          result.weather[0].description,
          result.wind.degree,
          result.wind.speed,
          result.weather[0].icon
        )
      }).catch((err)=> {
        console.log(err)
      })
  }

}
