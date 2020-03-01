import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { SocialComponent } from './social/social.component';
import { WeatherComponent } from './weather/weather.component';

import { RegionFilterPipe } from './region-filter.pipe';
import { PhonePrettierPipe } from './phone-prettier.pipe';
import { TypeFilterPipe } from './type-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    SocialComponent,
    WeatherComponent,
    RegionFilterPipe,
    PhonePrettierPipe,
    TypeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RegionFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
