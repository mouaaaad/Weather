import { Component, OnInit } from '@angular/core';
import { IWeatherCard } from '../models/weather-card';
import { WeatherCardService } from '../services/weather-card.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathercards: IWeatherCard[] = [];

  constructor(private weatherCardService : WeatherCardService){}

  ngOnInit(): void {
    this.weathercards = this.weatherCardService.getAll();
  }
}
