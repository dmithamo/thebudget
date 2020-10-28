import React from 'react';
import CustomTextWrapper from '../components/CustomTextWrapper';
import MainLayout from '../components/layouts';

const HomeScreen: React.FC = (): JSX.Element => {
  return (
    <MainLayout>
      <CustomTextWrapper>I am the homescreen</CustomTextWrapper>
    </MainLayout>
  );
};

export default HomeScreen;
