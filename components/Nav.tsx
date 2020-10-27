import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

export function NavBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      {navItems.map(({ name }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(name)}
          style={styles.navbarItem}
          key={name}>
          <Text>{name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  navbarItem: {
    padding: 24,
  },
});
