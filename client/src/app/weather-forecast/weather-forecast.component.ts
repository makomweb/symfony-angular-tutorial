import { Component, OnInit } from '@angular/core';
import { Weather, WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  public data: Weather[] = [];
  public isLoading: boolean = true;

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.service.getForecast()
      .subscribe(
        data => this.data = data.forecast,
        err => console.log('fetching forecast failed: ', err),
        () => this.isLoading = false
      );
  }
}
