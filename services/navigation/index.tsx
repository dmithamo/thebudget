import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Transactions from '../../screens/transactions/Transactions';
import PlaceholderScreen from '../../screens/PlaceholderScreen';
import { ICONS } from '../../utils/constants';

export type NavItem = {
  name: string;
  component: React.FC;
  icon: string;
  showOnNav: boolean;
};

export const navItems: NavItem[] = [
  {
    name: 'transactions',
    component: Transactions,
    icon: ICONS.transactions,
    showOnNav: true,
  },
  {
    name: 'dashboard',
    component: PlaceholderScreen,
    icon: ICONS.dashboard,
    showOnNav: true,
  },
  {
    name: 'notifications',
    component: PlaceholderScreen,
    icon: ICONS.notifications,
    showOnNav: true,
  },
  {
    name: 'settings',
    component: PlaceholderScreen,
    icon: ICONS.settings,
    showOnNav: true,
  },
  // hidden routes
  {
    name: 'record-income',
    component: PlaceholderScreen,
    icon: ICONS.expense,
    showOnNav: false,
  },
  {
    name: 'record-expense',
    component: PlaceholderScreen,
    icon: ICONS.expense,
    showOnNav: false,
  },
  {
    name: 'create-budget',
    component: PlaceholderScreen,
    icon: ICONS.budget,
    showOnNav: false,
  },
];

export default function NavigationService() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={navItems[0].name}>
        {navItems.map(({ name, component }) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
