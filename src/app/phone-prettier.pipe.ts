import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePrettier',
  pure: true
})

export class PhonePrettierPipe implements PipeTransform {

  transform(phone: number, ...args: any[]): string {
    return '+' + phone.toString().slice(0, -6) + ' ' + phone.toString().slice(-6, -3) + ' ' + phone.toString().slice(-3);
  }

}
