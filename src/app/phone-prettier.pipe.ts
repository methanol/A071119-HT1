import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePrettier',
})

export class PhonePrettierPipe implements PipeTransform {

  transform(phone: number): string {
    return '+'+ phone.toString().slice(0, -9) + ' ' + phone.toString().slice(-9, -6) + ' ' + phone.toString().slice(-6, -3) + ' ' + phone.toString().slice(-3);
  }

}
