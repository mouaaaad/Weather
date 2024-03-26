import { Injectable } from '@angular/core';
import { IWeather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weathers: IWeather[] = [];


  constructor() { 
    this.weathers.push({
      day: "MON",
      condition: "RANNIG",
      temperature: 9,
      image: "..\\assets\\pluvieux.png"
    });

    this.weathers.push({
      day: "TUE",
      condition: "SUNNY",
      temperature: 15,
      image: "..\\assets\\soleil.png"
    });

    this.weathers.push({
      day: "WED",
      condition: "CLOUDY",
      temperature: 11,
      image: "..\\assets\\nuageux.png"
    });

    this.weathers.push({
      day: "THU",
      condition: "SUNNY",
      temperature: 19,
      image: "..\\assets\\soleil.png"
    });

    this.weathers.push({
      day: "FRI",
      condition: "CLOUDY",
      temperature: 12,
      image: "..\\assets\\nuageux.png"
    });
  }

  public getAll(): IWeather[] {
    return this.weathers;
  }
}
