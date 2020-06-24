import { NgModule }            from '@angular/core';
import { MonthYearToDatePipe } from './month-year-to-date.pipe';

@NgModule({
  declarations: [MonthYearToDatePipe],
  exports: [MonthYearToDatePipe]
})
export class MonthYearToDatePipeModule {
}
