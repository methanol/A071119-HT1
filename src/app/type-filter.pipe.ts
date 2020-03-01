import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from './model/static.database';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(places: IPlace[]): String[] {

    return places.map(place => place.type)
                 .filter((it, ind, arr) => arr.indexOf(it) === ind);
  }

}
