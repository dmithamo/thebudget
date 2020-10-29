import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import CustomTextWrapper from './CustomTextWrapper';

type PageHeaderCardProps = {
  title: string;
  subtitle: string;
  style?: object;
};

const PageHeaderCard: React.FC<PageHeaderCardProps> = ({
  title,
  subtitle,
  style,
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.surface,
        ...style,
      }}>
      <CustomTextWrapper
        style={{
          ...styles.title,
          fontFamily: theme.fonts.medium.fontFamily,
          fontWeight: theme.fonts.medium.fontWeight,
        }}>
        {title}
      </CustomTextWrapper>
      <CustomTextWrapper
        style={{
          ...styles.subtitle,
          fontFamily: theme.fonts.thin.fontFamily,
          fontWeight: theme.fonts.thin.fontWeight,
        }}>
        {subtitle}
      </CustomTextWrapper>
    </View>
  );
};

PageHeaderCard.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 10,
  },

  title: {
    fontSize: 32,
  },

  subtitle: {
    fontSize: 16,
  },
});

export default PageHeaderCard;
