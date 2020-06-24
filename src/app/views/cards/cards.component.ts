import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router }                        from '@angular/router';
import { FormControl, FormGroup, Validators }            from '@angular/forms';
import { LATIN_PATTERN }                                 from '@constants/patterns';
import { markTouchedAndScroll }                          from '@widgets/reactive/reactive-funcs';
import { TransactionsService }                           from '@services/transactions';
import { ReplaySubject }                                 from 'rxjs';
import { takeUntil }                                     from 'rxjs/operators';

const CARDS_VALIDATORS = [Validators.required, Validators.minLength(19), Validators.maxLength(19)];

@Component({
  selector: 'app-cards',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnDestroy {

  destroy = new ReplaySubject(1);

  monthsOptions = Array.from({length: 12}).map((x, i) => `${i + 1}`);
  yearsOption = Array.from({length: 11}).map((x, i) => `${(new Date()).getFullYear() + i - 5}`);

  fg = new FormGroup({
    cardFromNumber: new FormControl(null, CARDS_VALIDATORS),
    cardToNumber: new FormControl(null, CARDS_VALIDATORS),
    holderFullName: new FormControl(null, [Validators.required, Validators.pattern(LATIN_PATTERN)]),
    monthTo: new FormControl(null, Validators.required),
    yearTo: new FormControl(null, Validators.required),
    sum: new FormControl(null, Validators.required)
  });

  isSubmitLoading: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transactionsService: TransactionsService
  ) {
    this.fg.patchValue(route.snapshot.queryParams);
    this.fg.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(queryParams => this.router.navigate([], {relativeTo: route, queryParams}));
  }

  onSubmit() {
    if (this.fg.valid) {
      this.isSubmitLoading = true;
      this.transactionsService.addTransaction(this.fg.value)
        .pipe(takeUntil(this.destroy))
        .subscribe(() => this.router.navigate(['history']))
        .add(() => this.isSubmitLoading = false);
    } else {
      markTouchedAndScroll(this.fg);
    }
  }

  ngOnDestroy() {
    this.destroy.next(1);
    this.destroy.complete();
  }
}
