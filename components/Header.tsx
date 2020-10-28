import { NavigationProp, Route } from '@react-navigation/native';
import { Scene } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomTextWrapper from './CustomTextWrapper';
import { useTheme } from 'react-native-paper';
import CustomButton from './CustomButton';

type SceneProp = Scene<Route<string, object | undefined>>;
type HeaderProps = {
  previous?: SceneProp;
  navigation: NavigationProp<Record<string, object | undefined>>;
  scene?: SceneProp;
};

type HeaderNavItem = {
  icon?: string;
  name: string;
  onPress: () => any;
};

const SEARCH_ACTION = {
  icon: 'folder-search',
  name: 'search',
  onPress: () => {
    console.log('GLOBAL SEARCH');
  },
};

const USER_PROFILE_ACTION = {
  icon: 'account-circle',
  name: 'profile',
  onPress: () => {
    console.log('USER PROFILE');
  },
};

const HEADER_NAV_ITEMS: { [key: string]: HeaderNavItem[] } = {
  transactions: [SEARCH_ACTION],
  dashboard: [SEARCH_ACTION],
  budget: [SEARCH_ACTION],
  settings: [SEARCH_ACTION, USER_PROFILE_ACTION],
};

const Header: React.FC<HeaderProps> = ({ navigation, previous, scene }) => {
  const title = scene?.descriptor.options.headerTitle || scene?.route.name;
  const theme = useTheme();

  const navItems = scene ? HEADER_NAV_ITEMS[scene?.route.name] : [];
  return (
    <View
      style={{
        ...styles.header,
        backgroundColor: theme.colors.primary,
      }}>
      <View style={styles.firstSection}>
        {previous ? (
          <CustomButton
            style={styles.headerItem}
            icon="arrow-left"
            iconSize={24}
            onPress={navigation.goBack}
          />
        ) : undefined}
        <CustomTextWrapper
          style={{
            ...styles.headerItem,
            fontFamily: theme.fonts.regular.fontFamily,
          }}>
          {title}
        </CustomTextWrapper>
      </View>

      <View style={styles.actionsContainer}>
        {navItems.map(({ name, icon, onPress }: HeaderNavItem) => (
          <CustomButton
            key={name}
            style={styles.actionBtn}
            iconSize={28}
            icon={icon}
            onPress={onPress}
            iconStyle={{
              ...styles.actionIcon,
              color: theme.colors.onSurface,
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 1,
  },

  firstSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  headerItem: {
    padding: 12,
    textTransform: 'capitalize',
    fontSize: 16,
  },

  actionsContainer: {
    paddingRight: 24,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  actionBtn: {},

  actionIcon: {
    paddingLeft: 32,
  },
});

export default Header;
