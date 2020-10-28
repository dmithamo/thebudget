import React from 'react';
import MainLayout from '../../components/layouts';
import Expenses from './Expenses';

const Transactions: React.FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Expenses />
    </MainLayout>
  );
};

export default Transactions;
