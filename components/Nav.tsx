import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PlaceholderScreen from '../screens/PlaceholderScreen';

type NavItem = {
  name: string;
  component: () => JSX.Element;
};

export const navItems: NavItem[] = [
  { name: 'home', component: PlaceholderScreen },
  { name: 'expenses', component: PlaceholderScreen },
  { name: 'budget', component: PlaceholderScreen },
  { name: 'settings', component: PlaceholderScreen },
  { name: 'profile', component: PlaceholderScreen },
];

export default function NavigationService() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navItems[0].name}>
        {navItems.map(({ name, component }) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
