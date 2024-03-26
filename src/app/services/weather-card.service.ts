import { Injectable } from '@angular/core';
import { IWeatherCard } from '../models/weather-card';

@Injectable({
  providedIn: 'root'
})
export class WeatherCardService {

  weathercards: IWeatherCard[] = [];


  constructor() { 
    this.weathercards.push({
      state: "RANNIG",
      image: "..\\assets\\pluvieux.png",
      cityName: "Paris",
      temperature: 9,
      minTemp: 5,
      maxTemp: 12
    });

    this.weathercards.push({
      state: "SUNNY",
      image: "..\\assets\\pluvieux.png",
      cityName: "Toulouse",
      temperature: 15,
      minTemp: 12,
      maxTemp: 20
    });

    this.weathercards.push({
      state: "CLOUDY",
      image: "..\\assets\\pluvieux.png",
      cityName: "Strasbourg",
      temperature: 9,
      minTemp: 7,
      maxTemp: 13
    });

    
  }

  public getAll(): IWeatherCard[] {
    return this.weathercards;
  }
}
