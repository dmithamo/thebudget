import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import CustomTextWrapper from '../../components/CustomTextWrapper';
import Header from '../../components/Header';
import MainLayout from '../../components/layouts';
import TabSelector from '../../components/TabSelector';
import Budgets from './Budget';
import Expenses from './Expenses';
import Incomes from './Income';

const Transactions: React.FC = (): JSX.Element => {
  const tabs = [
    {
      name: 'Income',
      icon: 'bank-plus',
    },
    {
      name: 'Expenses',
      icon: 'bank-minus',
    },
    {
      name: 'Budget',
      icon: 'wallet',
    },
  ];

  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].name);
  const onChangeSelectedTab = (name: string) => {
    setSelectedTab(name);
  };

  const theme = useTheme();
  const CustomHeader = () => (
    <Header childrenStyle={styles.header}>
      <View>
        <CustomTextWrapper
          style={{
            ...styles.title,
            fontFamily: theme.fonts.medium.fontFamily,
            fontWeight: theme.fonts.medium.fontWeight,
          }}>
          Transactions
        </CustomTextWrapper>
        <CustomTextWrapper>All transactions</CustomTextWrapper>
      </View>

      <View>
        <CustomButton
          icon="folder-search"
          onPress={() => {
            console.log('SEARCHING');
          }}
        />
      </View>
    </Header>
  );

  const renderAppropriateView = () => {
    switch (selectedTab) {
      case 'Income':
        return <Incomes />;

      case 'Budget':
        return <Budgets />;

      default:
        return <Expenses />;
    }
  };

  return (
    <MainLayout customHeader={CustomHeader}>
      <View style={styles.tabs}>
        <TabSelector
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={onChangeSelectedTab}
        />
      </View>
      <View style={styles.transactions}>{renderAppropriateView()}</View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { textTransform: 'uppercase', fontSize: 20 },
  tabs: {
    flex: 1,
  },
  transactions: {
    flexGrow: 1,
    paddingVertical: 16,
  },
});
export default Transactions;
