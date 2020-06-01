import { Pipe, PipeTransform } from '@angular/core';
import { utc } from 'moment';

@Pipe({
  name: 'formatter',
})
export class FormatterPipe implements PipeTransform {
  transform(value: any, isDate = false): any {
    if (isDate) return value ? utc(value).format('DD MMM YYYY') : 'N/A';
    return value ? value : 'N/A';
  }
}
