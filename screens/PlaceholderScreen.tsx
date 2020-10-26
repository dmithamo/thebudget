import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PlaceholderScreen() {
  return (
    <View style={styles.container}>
      <Text>Working on IT&reg;</Text>
      <Text style={styles.copyright}>&copy;2020 dmithamo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyright: {
    position: 'absolute',
    bottom: 0,
    padding: 3,
    opacity: 0.3,
  },
});
