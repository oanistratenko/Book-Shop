import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(value: any, args?: any) {
    value = value.charAt(0) !== 0 ? '0' + value : '' + value;
    let newStr = '';
    let count = 0;

    for (let i = 0; i < Math.floor(value.length / 2) - 1; i++) {
      newStr = newStr + value.substr(i * 2, 2) + '-';
      count = i;
    }
    return newStr + value.substr(count * 2);
  }
}
