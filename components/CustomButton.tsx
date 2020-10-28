import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomTextWrapper from './CustomTextWrapper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

type CustomButtonProps = {
  style?: object;
  text?: string;
  textStyle?: object;
  icon?: string;
  iconSize?: number;
  iconStyle?: object;
  onPress: () => any;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  style,
  text,
  textStyle,
  icon,
  iconSize,
  iconStyle,
  onPress,
}) => (
  <TouchableOpacity style={{ ...styles.container, ...style }} onPress={onPress}>
    {text ? (
      <CustomTextWrapper style={textStyle}>{text}</CustomTextWrapper>
    ) : undefined}

    {icon ? (
      <Icon name={icon} style={iconStyle} size={iconSize || 24} />
    ) : undefined}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    textAlign: 'center',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CustomButton;
