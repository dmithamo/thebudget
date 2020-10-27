import {
  NavigationContainer,
  NavigationProp,
  Route,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Scene } from '@react-navigation/stack/lib/typescript/src/types';
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

type SceneProp = Scene<Route<string, object | undefined>>;
type HeaderProps = {
  previous?: SceneProp;
  navigation: NavigationProp<Record<string, object | undefined>>;
  scene?: SceneProp;
};

export const Header: React.FC<HeaderProps> = ({
  navigation,
  previous,
  scene,
}) => {
  const title = scene?.descriptor.options.headerTitle || scene?.route.name;

  return (
    <View style={headerStyles.header}>
      {previous ? (
        <TouchableOpacity
          style={headerStyles.headerItem}
          onPress={navigation.goBack}>
          <Text>Back</Text>
        </TouchableOpacity>
      ) : undefined}
      <Text style={headerStyles.headerItem}>{title}</Text>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    elevation: 5,
  },

  headerItem: {
    padding: 16,
  },
});

export const BottomNavBar: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isCurrentRoute = (routeName: string) => routeName === route.name;
  return (
    <View style={navbarStyles.navbar}>
      {navItems.map(({ name }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(name)}
          style={navbarStyles.navbarBtn}
          key={name}>
          <Text
            style={{
              ...navbarStyles.navBtnIcon,
              ...{ opacity: isCurrentRoute(name) ? 1 : 0.65 },
            }}>
            {name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const navbarStyles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 5,
  },
  navbarBtn: {
    padding: 16,
  },

  navBtnIcon: {
    color: 'black',
  },
});
