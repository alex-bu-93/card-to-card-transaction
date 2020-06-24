import { Component, Input } from '@angular/core';
import { AbstractReactive } from '../abstract-reactive';

@Component({
  selector: 'app-reactive-select',
  templateUrl: './reactive-select.component.html'
})
export class ReactiveSelectComponent extends AbstractReactive {

  @Input() options: string[];
}
