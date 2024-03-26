import { Component, Input, OnInit } from '@angular/core';
import { IWeatherCard } from '../models/weather-card';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent  {

  @Input() weathercard!: IWeatherCard;

}
