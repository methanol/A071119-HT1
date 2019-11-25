import { Component } from '@angular/core';
import {IPlace, ISocial, IWeather, logoA} from './model/static.database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A071119-HT1';

  private weather: IWeather;
  private social: ISocial;
  private logoData = logoA;

  selectPlace(currentPlace: IPlace): void {
    this.weather = currentPlace.weather;
    this.social = currentPlace.social_info;
  }

  getInfo(info: "weather" | "social"): IWeather | ISocial {
    return (info === "weather") ? this.weather : this.social;
  }

  get logoSrc() {
    return this.logoData.src;
  }

}
