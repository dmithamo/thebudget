/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavBar from '../BottomNavBar';
import OverlayButton from '../OverlayButton';

type MainLayoutProps = {
  customHeader: () => JSX.Element;
  children: JSX.Element | JSX.Element[];
  centerContent?: boolean;
  showOverlayButton?: boolean;
  overlayBtnActions?: Array<any>;
};

const MainLayout: React.FC<MainLayoutProps> = ({
  customHeader,
  children,
  centerContent,
  showOverlayButton,
  overlayBtnActions,
}): JSX.Element => {
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
      {customHeader()}
      <ScrollView
        contentContainerStyle={{
          ...styles.contentContainer,
          flexGrow: centerContent ? 1 : 0,
        }}>
        {children}
      </ScrollView>
      {showOverlayButton ? (
        <OverlayButton actions={overlayBtnActions || []} />
      ) : undefined}
      <BottomNavBar />
    </SafeAreaView>
  );
};

MainLayout.defaultProps = {
  centerContent: false,
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default MainLayout;
