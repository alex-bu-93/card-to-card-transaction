import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { ReactiveInputModule }  from '@widgets/reactive/reactive-fields/reactive-input';
import { ReactiveSelectModule } from '@widgets/reactive/reactive-fields/reactive-select';
import { NzButtonModule }       from 'ng-zorro-antd/button';
import { NzIconModule }         from 'ng-zorro-antd/icon';
import { CardModule }           from './widgets/card';
import { CardsRoutingModule }   from './cards-routing.module';
import { CardsComponent }       from './cards.component';

const REACTIVE_FIELDS_MODULES = [
  ReactiveInputModule,
  ReactiveSelectModule
];
const ANT_DESIGN_MODULES = [
  NzButtonModule,
  NzIconModule
];

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    CardsRoutingModule,
    REACTIVE_FIELDS_MODULES,
    ANT_DESIGN_MODULES
  ],
  declarations: [CardsComponent]
})
export class CardsModule {
}
