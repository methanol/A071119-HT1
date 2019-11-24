import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPlace, places} from '../model/static.database';
import {RegionFilterPipe} from '../region-filter.pipe';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  // @Input()
  // places: IPlace[]; ?QUESTION

  @Output()
  SelectPlace: EventEmitter<IPlace> = new EventEmitter();

  private selectedPlacePrimary: IPlace;

  public places: IPlace[];

  public set selectedPlace(place: IPlace) {
    this.selectedPlacePrimary = place;
    this.SelectPlace.emit(place);
  }

  public get selectedPlace(): IPlace {
    return this.selectedPlacePrimary;
  }

  public selectedType: string;
  public types: string[] = [];

  constructor(private regionFilter: RegionFilterPipe) { }

  ngOnInit() {
      this.places = places;

      // this.types = [...new Set(
      //   places.map(place => place.type)
      // )];

      this.places.map(place => place.type).forEach((it) => { 
        (!this.types.includes(it)) ? this.types.push(it) : null;
      }) //implementation with Set is much better, just trying to find another way 

      this.selectType();
  }

  getFirstPlace(): IPlace {
    return this.regionFilter.transform(this.places, this.selectedType)[0];
  }

  selectType(placeType?: string): void {
    this.selectedType = placeType;
    this.selectedPlace = this.getFirstPlace();
  }

  selectPlace(place: IPlace): void {
    this.selectedPlace = place;
  }

}
