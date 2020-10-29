import {
  Route,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import { Scene } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import CustomButton from './CustomButton';

type SceneProp = Scene<Route<string, object | undefined>>;
type HeaderProps = {
  children?: JSX.Element | JSX.Element[];
  style?: object;
  childrenStyle?: object;
};

const Header: React.FC<HeaderProps> = ({ children, style, childrenStyle }) => {
  const theme = useTheme();

  const nav = useNavigation();
  const { index } = useNavigationState((state) => state);
  const hasPrevious = index !== 0;
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.primary,
        ...style,
      }}>
      {hasPrevious ? (
        <CustomButton
          style={styles.backBtn}
          icon="arrow-left"
          iconSize={24}
          onPress={nav.goBack}
        />
      ) : undefined}
      {children ? (
        <View
          style={{
            ...childrenStyle,
          }}>
          {children}
        </View>
      ) : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backBtn: {},

  children: {},
});

export default Header;
