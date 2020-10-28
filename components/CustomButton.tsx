import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomTextWrapper from './CustomTextWrapper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  <TouchableOpacity style={{ ...style }} onPress={onPress}>
    {text ? (
      <CustomTextWrapper style={textStyle}>{text}</CustomTextWrapper>
    ) : undefined}

    {icon ? (
      <Icon name={icon} style={iconStyle} size={iconSize || 24} />
    ) : undefined}
  </TouchableOpacity>
);

export default CustomButton;
