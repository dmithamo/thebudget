import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import CustomTextWrapper from '../../components/CustomTextWrapper';
import { RootState } from '../../services/store/rootReducer';
import { formartCurrency } from '../../utils/format';
import { TransactionPeriod } from '../../utils/types';
import { getTransactionTotal } from './helpers';

const Incomes: React.FC = () => {
  const { incomes, transactionPeriod } = useSelector(
    (state: RootState) => state.transactions,
  );
  return (
    <View style={styles.container}>
      <CustomTextWrapper>
        {TransactionPeriod[transactionPeriod]} income
      </CustomTextWrapper>
      <View>
        <CustomTextWrapper>
          Total income&nbsp;
          {formartCurrency(getTransactionTotal(incomes, transactionPeriod))}
        </CustomTextWrapper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Incomes;
