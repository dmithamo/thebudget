import {
  Expense,
  Income,
  Budget,
  TransactionPeriod,
  Category,
} from '../../utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import isEqual from 'lodash/isEqual';
import { subDays } from 'date-fns';

interface TransactionsState {
  transactionPeriod: TransactionPeriod;
  date: Date;
  expenses: Expense[];
  incomes: Income[];
  budgets: Budget[];
}

const initialState: TransactionsState = {
  transactionPeriod: TransactionPeriod.Annual,
  date: new Date(),
  expenses: [
    {
      amount: 2000,
      timestamp: subDays(new Date(), 30),
      description: 'Buy the thing',
      category: Category.Groceries,
    },
  ],
  incomes: [],
  budgets: [],
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

    addBudget(state, action: PayloadAction<Budget>) {
      state.budgets.push(action.payload);
    },
    removeBudget(state, action: PayloadAction<Budget>) {
      state.budgets.filter((bud) => !isEqual(bud, action.payload));
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
