import React from 'react';
import { useSelector } from 'react-redux';
import CustomTextWrapper from '../../components/CustomTextWrapper';
import MainLayout from '../../components/layouts';
import { RootState } from '../../services/store/rootReducer';

const Expenses: React.FC = (): JSX.Element => {
  const transactions = useSelector((state: RootState) => state.transactions);
  return (
    <MainLayout>
      <CustomTextWrapper>Transactions</CustomTextWrapper>
      <CustomTextWrapper>
        {JSON.stringify(transactions, null, 4)}
      </CustomTextWrapper>
    </MainLayout>
  );
};

export default Expenses;
