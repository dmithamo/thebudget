import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomTextWrapper from './CustomTextWrapper';
import { navItems } from './NavigationService';

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
          <CustomTextWrapper
            style={{
              ...navbarStyles.navBtnIcon,
              ...{ opacity: isCurrentRoute(name) ? 1 : 0.65 },
            }}>
            {name}
          </CustomTextWrapper>
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

export default BottomNavBar;
