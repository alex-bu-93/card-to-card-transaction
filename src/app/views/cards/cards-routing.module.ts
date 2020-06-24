import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { CardsComponent } from './cards.component';

@NgModule({
  imports: [RouterModule.forChild([{path: '', component: CardsComponent}])],
  exports: [RouterModule]
})
export class CardsRoutingModule {
}
