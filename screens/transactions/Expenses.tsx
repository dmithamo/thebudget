import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import CustomTextWrapper from '../../components/CustomTextWrapper';
import { RootState } from '../../services/store/rootReducer';
import { formartCurrency } from '../../utils/format';
import { TransactionPeriod } from '../../utils/types';
import { getTransactionTotal } from './helpers';

const Expenses: React.FC = () => {
  const { expenses, transactionPeriod } = useSelector(
    (state: RootState) => state.transactions,
  );
  return (
    <View style={styles.container}>
      <CustomTextWrapper>
        {TransactionPeriod[transactionPeriod]} expenses
      </CustomTextWrapper>
      <View>
        <CustomTextWrapper>
          Total expenses&nbsp;
          {formartCurrency(getTransactionTotal(expenses, transactionPeriod))}
        </CustomTextWrapper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
});

export default Expenses;
