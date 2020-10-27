import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavBar } from '../Nav';

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }): JSX.Element => {
  return (
    <View style={styles.container}>
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
