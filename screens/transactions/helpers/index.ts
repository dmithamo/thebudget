import getMonth from 'date-fns/getMonth';
import getWeek from 'date-fns/getWeek';
import getDate from 'date-fns/getDate';
import getYear from 'date-fns/getYear';
import {
  Expense,
  Income,
  TransactionPeriod,
  Budget,
} from './../../../utils/types';

type Transaction = Income | Expense | Budget;

/**
 * @description Get the sum of trxns for a given period
 * @param transactions Transactions
 * @param period TransactionPeriod
 */
export function getTransactionTotal(
  transactions: Transaction[],
  period: TransactionPeriod,
): number {
  switch (period) {
    case TransactionPeriod.Weekly:
      return transactions
        .filter(
          (t: Transaction) => getWeek(t.timestamp) === getWeek(new Date()),
        )
        .reduce((sum: number, trxn) => {
          sum += trxn.amount;
          return sum;
        }, 0);

    case TransactionPeriod.Daily:
      return transactions
        .filter(
          (t: Transaction) => getDate(t.timestamp) === getDate(new Date()),
        )
        .reduce((sum, trxn) => {
          sum += trxn.amount;
          return sum;
        }, 0);

    case TransactionPeriod.Annual:
      return transactions
        .filter(
          (t: Transaction) => getYear(t.timestamp) === getYear(new Date()),
        )
        .reduce((sum, trxn) => {
          sum += trxn.amount;
          return sum;
        }, 0);

    default:
      return transactions
        .filter(
          (t: Transaction) => getMonth(t.timestamp) === getMonth(new Date()),
        )
        .reduce((sum, trxn) => {
          sum += trxn.amount;
          return sum;
        }, 0);
  }
}

export function filterTransactionsByPeriod(
  transactions: Transaction[],
  period: TransactionPeriod,
): Transaction[] {
  console.log(period, transactions);
  return [];
}
