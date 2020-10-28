import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import CustomTextWrapper from './CustomTextWrapper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Tab = {
  name: string;
  icon?: string;
};

type TabSelectorProps = {
  tabs: Tab[];
  selectedTab: string;
  onSelectTab: (name: string) => void;
};
const TabSelector: React.FC<TabSelectorProps> = ({
  tabs,
  selectedTab,
  onSelectTab,
}) => {
  const theme = useTheme();
  const isSelected = (tabName: string) => tabName === selectedTab;

  return (
    <ScrollView
      contentContainerStyle={{
        ...styles.container,
        backgroundColor: theme.colors.primary,
      }}>
      {tabs.map(({ name, icon }) => (
        <TouchableOpacity
          style={{
            ...styles.tab,
            backgroundColor: isSelected(name)
              ? theme.colors.onSurface
              : theme.colors.primary,
          }}
          key={name}
          onPress={() => onSelectTab(name)}>
          <CustomTextWrapper
            style={{
              fontFamily: theme.fonts.medium.fontFamily,
              fontWeight: theme.fonts.medium.fontWeight,
              color: isSelected(name) ? theme.colors.accent : theme.colors.text,
            }}>
            {name}
          </CustomTextWrapper>
          {icon ? (
            <Icon
              style={{
                ...styles.tabIcon,
                color: isSelected(name)
                  ? theme.colors.accent
                  : theme.colors.text,
              }}
              size={20}
              name={icon}
            />
          ) : undefined}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 1,
  },
  tab: {
    paddingVertical: 12,
    width: 124,
    textAlign: 'center',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabIcon: {
    paddingHorizontal: 8,
  },
});

export default TabSelector;
