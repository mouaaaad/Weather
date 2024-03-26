import { Component, Input } from '@angular/core';
import { IWeather } from '../models/weather';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.css']
})
export class DayWeatherComponent {
  @Input() weather!: IWeather;
}
