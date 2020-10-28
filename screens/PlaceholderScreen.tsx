import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomTextWrapper from '../components/CustomTextWrapper';
import MainLayout from '../components/layouts';

export default function PlaceholderScreen() {
  return (
    <MainLayout centerContent>
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
