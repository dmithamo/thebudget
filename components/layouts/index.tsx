import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavBar from '../BottomNavBar';

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }): JSX.Element => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{
        ...styles.safeAreaView,
        backgroundColor: theme.colors.background,
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.primary}
        hidden={false}
      />
      <ScrollView centerContent contentContainerStyle={styles.contentContainer}>
        {children}
      </ScrollView>
      <BottomNavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default MainLayout;
