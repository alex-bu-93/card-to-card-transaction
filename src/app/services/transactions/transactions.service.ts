import { Injectable }     from '@angular/core';
import { HttpResponse }   from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay }          from 'rxjs/operators';
import { Transaction }    from '../../interfaces/transaction';

function getStorageTransactions(): Transaction[] {
  const storageTransactions = sessionStorage.getItem('transactions');
  return storageTransactions && JSON.parse(storageTransactions);
}

@Injectable({providedIn: 'root'})
export class TransactionsService {

  getTransactions(): Observable<Transaction[]> {
    return of(getStorageTransactions()).pipe(delay(1000));
  }

  addTransaction(transaction: Transaction): Observable<Transaction[]> {
    const transactions: Transaction[] = getStorageTransactions();
    sessionStorage.setItem('transactions', JSON.stringify(transactions ? [...transactions, transaction] : [transaction]));
    return of(getStorageTransactions()).pipe(delay(1000));
  }

  deleteTransaction(transactionIndex: number): Observable<any> {
    const transactions: Transaction[] = getStorageTransactions();
    sessionStorage.setItem('transactions', JSON.stringify(transactions.filter((x, i) => i !== transactionIndex)));
    return of(getStorageTransactions()).pipe(delay(1000));
  }
}
