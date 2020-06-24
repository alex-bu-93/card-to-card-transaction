import { Pipe, PipeTransform }        from '@angular/core';
import { of }                         from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

@Pipe({name: 'withLoading'})
export class WithLoadingPipe implements PipeTransform {

  transform(val) {
    return val ? val.pipe(
      map(response => ({isLoading: false, response})),
      startWith({isLoading: true}),
      catchError(err => of({isLoading: false, errMessage: err && (err.error || err.message)}))
    ) : null;
  }
}
