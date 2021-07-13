import { Weather, WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public data: Weather = new Weather();
  public busy: boolean = true;

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.service.getToday()
      .subscribe(
        data => {
          console.log('today: ', data);
          this.data = data;
        },
        err => console.log('today failed: ', err),
        () => this.busy = false
        );
  }
}
