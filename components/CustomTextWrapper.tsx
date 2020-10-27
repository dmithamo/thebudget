import React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'react-native-paper';

type CustomTextWrapperProps = {
  children: any;
  style?: object;
};
const CustomTextWrapper: React.FC<CustomTextWrapperProps> = ({
  children,
  style,
}) => {
  const theme = useTheme();
  return (
    <Text
      style={{
        fontFamily: theme.fonts.light.fontFamily,
        color: theme.colors.text,
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default CustomTextWrapper;
