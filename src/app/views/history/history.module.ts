import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { RequestWrapperModule }      from '@widgets/request-wrapper';
import { NzTableModule }             from 'ng-zorro-antd/table';
import { NzDividerModule }           from 'ng-zorro-antd/divider';
import { NzButtonModule }            from 'ng-zorro-antd/button';
import { MonthYearToDatePipeModule } from './pipes/month-year-to-date';
import { HistoryRoutingModule }      from './history-routing.module';
import { HistoryComponent }          from './history.component';

const ANT_DESIGN_MODULES = [
  NzTableModule,
  NzDividerModule,
  NzButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MonthYearToDatePipeModule,
    RequestWrapperModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [HistoryComponent],
})
export class HistoryModule {
}
