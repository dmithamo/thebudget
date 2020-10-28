import { NavigationProp, Route } from '@react-navigation/native';
import { Scene } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomTextWrapper from './CustomTextWrapper';
import { useTheme } from 'react-native-paper';
import CustomButton from './CustomButton';

type SceneProp = Scene<Route<string, object | undefined>>;
type HeaderProps = {
  previous?: SceneProp;
  navigation: NavigationProp<Record<string, object | undefined>>;
  scene?: SceneProp;
};

const Header: React.FC<HeaderProps> = ({ navigation, previous, scene }) => {
  const title = scene?.descriptor.options.headerTitle || scene?.route.name;
  const theme = useTheme();
  return (
    <View
      style={{
        ...headerStyles.header,
        backgroundColor: theme.colors.primary,
      }}>
      {previous ? (
        <CustomButton
          style={headerStyles.headerItem}
          icon="arrow-left"
          iconSize={28}
          onPress={navigation.goBack}
        />
      ) : undefined}
      <CustomTextWrapper
        style={{
          ...headerStyles.headerItem,
          fontFamily: theme.fonts.regular.fontFamily,
        }}>
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
    elevation: 1,
  },

  headerItem: {
    padding: 12,
    textTransform: 'capitalize',
    fontSize: 16,
  },
});

export default Header;
