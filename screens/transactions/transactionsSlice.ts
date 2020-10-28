import { Expense, Income, TransactionPeriod } from '../../utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import isEqual from 'lodash/isEqual';

interface TransactionsState {
  transactionPeriod: TransactionPeriod;
  date: Date;
  expenses: Expense[];
  incomes: Income[];
}

const initialState: TransactionsState = {
  transactionPeriod: TransactionPeriod.Monthly,
  date: new Date(),
  expenses: [],
  incomes: [],
};

const transactionsState = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addExpense(state, action: PayloadAction<Expense>) {
      state.expenses.push(action.payload);
    },
    removeExpense(state, action: PayloadAction<Expense>) {
      state.expenses.filter((exp) => !isEqual(exp, action.payload));
    },

    addIncome(state, action: PayloadAction<Income>) {
      state.incomes.push(action.payload);
    },
    removeIncome(state, action: PayloadAction<Income>) {
      state.incomes.filter((inc) => !isEqual(inc, action.payload));
    },

    setTransactionPeriod(state, action: PayloadAction<TransactionPeriod>) {
      state.transactionPeriod = action.payload;
    },
    setDate(state, action: PayloadAction<Date>) {
      state.date = action.payload;
    },
  },
});

export const {
  addExpense,
  removeExpense,
  addIncome,
  removeIncome,
  setTransactionPeriod,
  setDate,
} = transactionsState.actions;

export default transactionsState.reducer;
