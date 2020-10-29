import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Portal, Provider, useTheme } from 'react-native-paper';
import { ICONS } from '../utils/constants';

type Action = {
  icon: string;
  label: string;
  onPress: () => void;
};

type OverlayButtonProps = {
  actions: Action[];
};

const OverlayButton: React.FC<OverlayButtonProps> = ({ actions }) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }: any) => setState({ open });

  const { open } = state;

  const theme = useTheme();

  return actions.length > 1 ? (
    <Provider>
      <Portal theme={theme}>
        <FAB.Group
          fabStyle={{
            backgroundColor: theme.colors.onSurface,
          }}
          style={styles.collection}
          open={open}
          visible
          onStateChange={onStateChange}
          onPress={() => {}}
          icon={!open ? actions[0].icon : ICONS.close}
          actions={actions}
        />
      </Portal>
    </Provider>
  ) : (
    <FAB
      onPress={actions[0].onPress}
      icon={!open ? actions[0].icon : ICONS.close}
      style={{
        ...styles.singleButton,
        backgroundColor: theme.colors.onSurface,
      }}
    />
  );
};

const styles = StyleSheet.create({
  collection: {
    position: 'absolute',
    bottom: 80,
  },
  singleButton: {
    position: 'absolute',
    bottom: 80,
    right: 16,
  },
});

export default OverlayButton;
