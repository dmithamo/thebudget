import { combineReducers } from '@reduxjs/toolkit';
import transactions from '../../screens/transactions/transactionsSlice';

const rootReducer = combineReducers({ transactions });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
