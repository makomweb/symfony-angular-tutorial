import { Component, OnInit } from '@angular/core';
import { WeatherForecast, WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  public forecast: WeatherForecast = new WeatherForecast();
  public isLoading: boolean = true;

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.service.getForecast()
      .subscribe(
        data => this.forecast = data,
        err => console.log('fetching forecast failed: ', err),
        () => this.isLoading = false
      );
  }
}
