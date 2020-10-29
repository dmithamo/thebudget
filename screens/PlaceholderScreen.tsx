/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomTextWrapper from '../components/CustomTextWrapper';
import Header from '../components/Header';
import MainLayout from '../components/layouts';

export default function PlaceholderScreen() {
  const CustomHeader = () => (
    <Header
      style={{
        paddingVertical: 4,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
      }}>
      <CustomTextWrapper>Working on IT&reg;</CustomTextWrapper>
    </Header>
  );
  return (
    <MainLayout centerContent customHeader={CustomHeader}>
      <View style={styles.container}>
        <CustomTextWrapper style={styles.trademark}>
          Working on IT&reg;
        </CustomTextWrapper>
        <CustomTextWrapper style={styles.copyright}>
          &copy;2020 dmithamo
        </CustomTextWrapper>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trademark: {
    fontSize: 32,
  },
  copyright: {
    padding: 3,
    opacity: 0.3,
  },
});
