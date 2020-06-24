import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'onInputPipe'})
export class OnInputPipe implements PipeTransform {
  transform(value: string, option: string): string {
    if (!value) { return ''; }
    switch (option) {
      case 'card-number':
        return value
          .replace(/\s+/g, '')
          .replace(/(\d{4})/g, '$1 ')
          .trim();
      default:
        return value;
    }
  }
}
