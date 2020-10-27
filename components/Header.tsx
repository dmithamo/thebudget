import { NavigationProp, Route } from '@react-navigation/native';
import { Scene } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomTextWrapper from './CustomTextWrapper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';

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
        <TouchableOpacity
          style={headerStyles.headerItem}
          onPress={navigation.goBack}>
          <Icon size={24} name="chevron-left" />
        </TouchableOpacity>
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
    padding: 16,
    textTransform: 'capitalize',
    fontSize: 16,
  },
});

export default Header;
