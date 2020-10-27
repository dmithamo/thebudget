import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import Header from './Header';

export type NavItem = {
  name: string;
  component: () => JSX.Element;
  icon: string;
};

export const navItems: NavItem[] = [
  { name: 'home', component: PlaceholderScreen, icon: 'home-outline' },
  {
    name: 'expenses',
    component: PlaceholderScreen,
    icon: 'chart-bar-stacked',
  },
  { name: 'budget', component: PlaceholderScreen, icon: 'wallet-outline' },
  {
    name: 'profile',
    component: PlaceholderScreen,
    icon: 'account-circle-outline',
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