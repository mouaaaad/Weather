import { Component, OnInit } from '@angular/core';
import { IWeather } from '../models/weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  weathers: IWeather[] = [];

  constructor(private weatherService : WeatherService){}

  ngOnInit(): void {
    this.weathers = this.weatherService.getAll();
  }
}
