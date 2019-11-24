import { Pipe, PipeTransform } from '@angular/core';
import {IPlace} from './model/static.database';

@Pipe({
  name: 'regionFilter',
  pure: true
  //pure: false ?QUESTION
})

export class RegionFilterPipe implements PipeTransform {

  transform(places: IPlace[], searchTerm: string): IPlace[] {

    return (searchTerm) ? places.filter((place: IPlace): boolean => place.type === searchTerm) : places;
  }

}
