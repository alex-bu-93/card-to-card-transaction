import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { RouterModule }        from '@angular/router';
import { NzLayoutModule }      from 'ng-zorro-antd/layout';
import { NzMenuModule }        from 'ng-zorro-antd/menu';
import { NzIconModule }        from 'ng-zorro-antd/icon';
import { NzButtonModule }      from 'ng-zorro-antd/button';
import { MainLayoutComponent } from './main-layout.component';

const ANT_DESIGN_MODULES = [
  NzLayoutModule,
  NzMenuModule,
  NzIconModule,
  NzButtonModule
];

@NgModule({
  imports: [CommonModule, RouterModule, ANT_DESIGN_MODULES],
  declarations: [MainLayoutComponent]
})
export class MainLayoutModule {
}
