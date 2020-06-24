import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'monthYearToDate'})
export class MonthYearToDatePipe implements PipeTransform{
  transform(month: number, year: number): Date {
    return new Date(year, month, 1);
  }
}
