import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import CustomButton from './CustomButton';

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
        <CustomButton
          style={{
            ...styles.tab,
            backgroundColor: isSelected(name)
              ? theme.colors.onSurface
              : theme.colors.primary,
          }}
          key={name}
          text={name}
          textStyle={{
            fontFamily: theme.fonts.medium.fontFamily,
            fontWeight: theme.fonts.medium.fontWeight,
            color: isSelected(name) ? theme.colors.accent : theme.colors.text,
          }}
          icon={icon}
          iconSize={20}
          iconStyle={{
            ...styles.tabIcon,
            color: isSelected(name) ? theme.colors.accent : theme.colors.text,
          }}
          onPress={() => onSelectTab(name)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  tab: {
    width: 125,
  },

  tabIcon: {
    paddingHorizontal: 8,
  },
});

export default TabSelector;
