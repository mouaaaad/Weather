import { Component, Input } from '@angular/core';
import { Weather } from '../Interface/weather';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.css']
})
export class DayWeatherComponent {
  @Input() weather!: Weather;
}
