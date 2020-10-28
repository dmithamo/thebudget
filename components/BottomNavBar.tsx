import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { navItems } from '../services/navigation';
import { useTheme } from 'react-native-paper';
import CustomButton from './CustomButton';

export const BottomNavBar: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isCurrentRoute = (routeName: string) => routeName === route.name;

  const theme = useTheme();
  return (
    <View
      style={{ ...navbarStyles.navbar, backgroundColor: theme.colors.primary }}>
      {navItems.map(({ name, icon }) => (
        <CustomButton
          key={name}
          style={navbarStyles.navbarBtn}
          icon={isCurrentRoute(name) ? icon.split('-outline')[0] : icon}
          iconSize={28}
          iconStyle={{
            ...navbarStyles.navIcon,
            ...{
              color: isCurrentRoute(name)
                ? theme.colors.accent
                : theme.colors.text,
              backgroundColor: isCurrentRoute(name)
                ? theme.colors.onSurface
                : theme.colors.primary,
            },
          }}
          onPress={() => navigation.navigate(name)}
        />
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
  },

  navIcon: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
});

export default BottomNavBar;
