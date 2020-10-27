import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import BottomNavBar from '../BottomNavBar';

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }): JSX.Element => {
  const theme = useTheme();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.background,
      }}>
      <View style={styles.main}>{children}</View>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
});

export default MainLayout;
