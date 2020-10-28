import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Transactions from '../../screens/transactions/Transactions';
import PlaceholderScreen from '../../screens/PlaceholderScreen';
import Header from '../../components/Header';

export type NavItem = {
  name: string;
  component: React.FC;
  icon: string;
};

export const navItems: NavItem[] = [
  { name: 'transactions', component: Transactions, icon: 'bank-transfer' },
  {
    name: 'dashboard',
    component: PlaceholderScreen,
    icon: 'chart-bar-stacked',
  },
  { name: 'budget', component: PlaceholderScreen, icon: 'wallet-outline' },
  {
    name: 'settings',
    component: PlaceholderScreen,
    icon: 'cogs',
  },
];

export default function NavigationService() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        initialRouteName={navItems[0].name}
        screenOptions={{
          header: ({ navigation, scene, previous }) => (
            <Header previous={previous} navigation={navigation} scene={scene} />
          ),
        }}>
        {navItems.map(({ name, component }) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
