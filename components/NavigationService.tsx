import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import Header from './Header';

export type NavItem = {
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
      <Stack.Navigator
        headerMode="screen"
        initialRouteName={navItems[0].name}
        screenOptions={{
          headerStyle: {
            height: 50,
            shadowColor: 'white',
          },
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
