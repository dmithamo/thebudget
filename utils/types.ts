// Month of the year
export enum Month {
  January = 0,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

// Day of the week
export enum Day {
  Monday = 0,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// generic category type. I may change this...
type CustomCategory = string;

// fields that fully define an expense
export type Expense = {
  amount: number;
  description: string;
  timestamp: Date;
  category: Category;
};

export enum Category {
  Food = 1,
  House,
  Utilities,
  Groceries,
  Dates,
  Other,
}

export enum IncomeCategory {
  Salary = 1,
  Gift,
  Other,
}

// fields that fully describe an Income
export type Income = {
  amount: number;
  category: IncomeCategory;
  timestamp: Date;
};

// fields that fully describe a budget item
export type Budget = {
  amount: number;
  category: 'salaries' | 'gift' | CustomCategory;
  timestamp: Date;
};

// transacton period
export enum TransactionPeriod {
  Daily = 1,
  Monthly,
  Weekly,
  Annual,
}
