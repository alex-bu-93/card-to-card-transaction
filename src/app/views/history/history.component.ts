import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router }                             from '@angular/router';
import { TransactionsService }                from '@services/transactions';
import { Transaction }                        from '../../interfaces/transaction';

@Component({
  selector: 'app-history',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './history.component.html'
})
export class HistoryComponent {

  items$ = this.transactionsService.getTransactions();

  constructor(
    private router: Router,
    private transactionsService: TransactionsService
  ) {
  }

  onRepeat(transaction: Transaction) {
    this.router.navigate(['cards'], {queryParams: transaction});
  }

  onDelete(transactionIndex: number) {
    this.items$ = this.transactionsService.deleteTransaction(transactionIndex);
  }
}
