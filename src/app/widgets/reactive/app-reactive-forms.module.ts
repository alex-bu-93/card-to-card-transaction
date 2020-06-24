import { NgModule }             from '@angular/core';
import { ReactiveInputModule }  from './reactive-fields/reactive-input';
import { ReactiveSelectModule } from './reactive-fields/reactive-select';

const APP_REACTIVE_COMPONENTS_MODULES = [ReactiveInputModule, ReactiveSelectModule];

@NgModule({
  imports: [APP_REACTIVE_COMPONENTS_MODULES],
  exports: [APP_REACTIVE_COMPONENTS_MODULES]
})
export class AppReactiveFormsModule {
}

