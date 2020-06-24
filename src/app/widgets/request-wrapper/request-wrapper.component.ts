import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Observable, throwError }                                                     from 'rxjs';
import { catchError, tap }                                                            from 'rxjs/operators';

@Component({
  selector: 'app-request-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './request-wrapper.component.html'
})
export class RequestWrapperComponent<T = any> implements OnChanges {

  @Input() request$: Observable<T>;
  @Output() response = new EventEmitter<T>();

  public data: T;

  ngOnChanges() { this.request$ = this.getUpdatedRequest(this.request$); }

  getUpdatedRequest(request$: Observable<T>) {
    return request$ && request$.pipe(
      tap(res => this.emitValue(res)),
      catchError(res => throwError(res))
    );
  }

  emitValue(value) {
    this.data = value;
    this.response.emit(value);
  }
}
