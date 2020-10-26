/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Working on IT&reg;</Text>
      <View style={styles.copyright}>
        <Text>&copy; 2020 dmithamo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyright: {
    opacity: 0.3,
    position: 'absolute',
    bottom: 0,
    padding: 2,
  },
});

export default App;
