/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import NavigationService from './components/NavigationService';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/src/types';

const theme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#eceff1',
  },
  fonts: configureFonts({
    default: {
      light: {
        fontFamily: 'IBMPlexSans-Light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'IBMPlexSans-Light',
        fontWeight: 'normal',
      },
      regular: {
        fontFamily: 'IBMPlexSans-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'IBMPlexSans-Medium',
        fontWeight: '600',
      },
    },
  }),
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationService />
    </PaperProvider>
  );
};

export default App;
