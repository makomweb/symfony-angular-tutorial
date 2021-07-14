import { Weather, WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public data: Weather;
  public isLoading: boolean = true;

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.service.getToday()
      .subscribe(
        data => this.data = data,
        err => console.log('fetching today failed: ', err),
        () => this.isLoading = false
      );
  }
}
