import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { DayWeatherComponent } from './day-weather/day-weather.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    NavbarsComponent,
    WeatherInfoComponent,
    TwitterFeedComponent,
    DayWeatherComponent,
    WeatherCardComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
