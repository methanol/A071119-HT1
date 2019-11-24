import { Component, Input } from '@angular/core';
import {IWeather} from '../model/static.database';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input()
  weather: IWeather;

  constructor(private domSanitizer: DomSanitizer) { }

  trustStyle(style: string): SafeStyle {
    return this.domSanitizer.bypassSecurityTrustStyle(style); // ?QUESTION
  }

}
