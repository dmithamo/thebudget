import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MainLayout from '../../components/layouts';
import TabSelector from '../../components/TabSelector';
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
  ];

  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].name);
  const onChangeSelectedTab = (name: string) => {
    setSelectedTab(name);
  };

  return (
    <MainLayout>
      <View style={styles.tabs}>
        <TabSelector
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={onChangeSelectedTab}
        />
      </View>
      <View style={styles.transactions}>
        {selectedTab === 'Expenses' ? <Expenses /> : <Incomes />}
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactions: {
    flexGrow: 1,
    paddingVertical: 16,
  },
});
export default Transactions;
