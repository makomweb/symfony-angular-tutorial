import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Weather
{
  public temperature: number = NaN;
  public sky: string = '';
}

export class WeatherForecast
{
  public forecast: Weather[] = [];
}

const API_URL: string = 'https://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getToday() {
    return this.http.get<Weather>(API_URL + '/today');
  }

  getForecast() {
    return this.http.get<WeatherForecast>(API_URL + '/forecast');
  }
}
