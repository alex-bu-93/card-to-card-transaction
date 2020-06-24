import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { RouterModule }     from '@angular/router';
import { NzCardModule }     from 'ng-zorro-antd/card';
import { NzButtonModule }   from 'ng-zorro-antd/button';
import { NzIconModule }     from 'ng-zorro-antd/icon';
import { WelcomeComponent } from './welcome.component';

const ANT_DESIGN_MODULES = [
  NzCardModule,
  NzButtonModule,
  NzIconModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule {
}
