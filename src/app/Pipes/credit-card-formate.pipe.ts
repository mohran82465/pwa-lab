import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormate',
  standalone: true
})
export class CreditCardFormatePipe implements PipeTransform {

  transform(value: string): string  {
    // value = value.replace(/[^0-9]/g, '');
    if (value.length !== 16) {
      return value;
    }
    return `${value.substring(0, 4)} - ${value.substring(4, 8)} - ${value.substring(8, 12)} - ${value.substring(12, 16)}`
  }

}
