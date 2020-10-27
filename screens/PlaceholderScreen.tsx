import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainLayout from '../components/layouts';

export default function PlaceholderScreen() {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>Working on IT&reg;</Text>
        <Text style={styles.copyright}>&copy;2020 dmithamo</Text>
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
