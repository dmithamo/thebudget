import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { navItems } from '../services/navigation';
import { useTheme } from 'react-native-paper';

export const BottomNavBar: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isCurrentRoute = (routeName: string) => routeName === route.name;

  const theme = useTheme();
  return (
    <View
      style={{ ...navbarStyles.navbar, backgroundColor: theme.colors.primary }}>
      {navItems.map(({ name, icon }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(name)}
          style={navbarStyles.navbarBtn}
          key={name}>
          <Icon
            name={isCurrentRoute(name) ? icon.split('-outline')[0] : icon}
            size={28}
            style={{
              ...navbarStyles.navIcon,
              ...{
                color: isCurrentRoute(name)
                  ? theme.colors.accent
                  : theme.colors.text,
              },
            }}
          />
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
    elevation: 4,
    paddingVertical: 4,
  },
  navbarBtn: {
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {},

  navText: {
    textTransform: 'capitalize',
    fontSize: 12,
  },
});

export default BottomNavBar;
