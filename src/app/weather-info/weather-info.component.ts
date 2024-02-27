import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit{
  temperature!: number ;
  condition!: string ;
  humidity!: number ;
  windSpeed!: number ;
  location!: string ;

  ngOnInit() {
    this.temperature = 12;
    this.condition = "NUAGEUX";
    this.humidity = 65;
    this.windSpeed = 15;
    this.location = "France"
  }
}
