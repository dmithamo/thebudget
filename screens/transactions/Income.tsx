import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import CustomTextWrapper from '../../components/CustomTextWrapper';
import { RootState } from '../../services/store/rootReducer';

const Incomes: React.FC = () => {
  const { incomes } = useSelector((state: RootState) => state.transactions);
  return (
    <View>
      <CustomTextWrapper>Le incomes</CustomTextWrapper>
      <CustomTextWrapper>{JSON.stringify(incomes, null, 4)}</CustomTextWrapper>
    </View>
  );
};

export default Incomes;
