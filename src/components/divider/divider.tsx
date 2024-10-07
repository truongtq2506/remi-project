import React, { FC, memo } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type IDivider = {
  height?: number;
  color?: string;
} & ViewStyle;

const Divider: FC<IDivider> = ({
  height = 1,
  color = '#f2f2f2',
  marginTop,
  marginBottom,
  marginVertical,
}) => {
  const style = {
    height,
    backgroundColor: color,
    marginTop,
    marginBottom,
    marginVertical,
  };
  return <View style={[styles.container, style]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
});

export default memo(Divider);
