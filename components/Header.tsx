import { NavigationProp, Route } from '@react-navigation/native';
import { Scene } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomTextWrapper from './CustomTextWrapper';

type SceneProp = Scene<Route<string, object | undefined>>;
type HeaderProps = {
  previous?: SceneProp;
  navigation: NavigationProp<Record<string, object | undefined>>;
  scene?: SceneProp;
};

const Header: React.FC<HeaderProps> = ({ navigation, previous, scene }) => {
  const title = scene?.descriptor.options.headerTitle || scene?.route.name;

  return (
    <View style={headerStyles.header}>
      {previous ? (
        <TouchableOpacity
          style={headerStyles.headerItem}
          onPress={navigation.goBack}>
          <CustomTextWrapper>Back</CustomTextWrapper>
        </TouchableOpacity>
      ) : undefined}
      <CustomTextWrapper style={headerStyles.headerItem}>
        {title}
      </CustomTextWrapper>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    elevation: 5,
  },

  headerItem: {
    padding: 16,
  },
});

export default Header;
