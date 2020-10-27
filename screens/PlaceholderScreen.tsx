import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomTextWrapper from '../components/CustomTextWrapper';
import MainLayout from '../components/layouts';

export default function PlaceholderScreen() {
  return (
    <MainLayout>
      <View style={styles.container}>
        <CustomTextWrapper>Working on IT&reg;</CustomTextWrapper>
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
  copyright: {
    padding: 3,
    opacity: 0.3,
  },
});
