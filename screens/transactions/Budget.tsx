import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import CustomTextWrapper from '../../components/CustomTextWrapper';
import { RootState } from '../../services/store/rootReducer';
import { formartCurrency } from '../../utils/format';
import { TransactionPeriod } from '../../utils/types';
import { getTransactionTotal } from './helpers';

const Budgets: React.FC = () => {
  const { budgets, transactionPeriod } = useSelector(
    (state: RootState) => state.transactions,
  );
  return (
    <View style={styles.container}>
      <CustomTextWrapper>
        {TransactionPeriod[transactionPeriod]} budget
      </CustomTextWrapper>
      <View>
        <CustomTextWrapper>
          Total in budget&nbsp;
          {formartCurrency(getTransactionTotal(budgets, transactionPeriod))}
        </CustomTextWrapper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Budgets;
