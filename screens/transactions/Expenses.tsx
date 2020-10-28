import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import CustomTextWrapper from '../../components/CustomTextWrapper';
import { RootState } from '../../services/store/rootReducer';

const Expenses: React.FC = () => {
  const { expenses } = useSelector((state: RootState) => state.transactions);
  return (
    <View>
      <CustomTextWrapper>And here be the xpenses</CustomTextWrapper>
      <CustomTextWrapper>{JSON.stringify(expenses, null, 4)}</CustomTextWrapper>
    </View>
  );
};

export default Expenses;
