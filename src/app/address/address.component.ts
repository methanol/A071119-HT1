import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IPlace, places} from '../model/static.database';
import {RegionFilterPipe} from '../region-filter.pipe';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

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

  constructor(private regionFilter: RegionFilterPipe) { }

  ngOnInit() {
      this.places = places;
      this.selectType();
  }

  private getFirstPlace(): IPlace {
    return this.regionFilter.transform(this.places, this.selectedType)[0];
  }

  public selectType(placeType?: string): void {
    this.selectedType = placeType;
    this.selectedPlace = this.getFirstPlace();
  }

  public selectCurrentPlace(place: IPlace): void {
    this.selectedPlace = place;
  }

  public checkSelection(placeType: string | null = null): boolean {
    return placeType === this.selectedType;
  }

}
