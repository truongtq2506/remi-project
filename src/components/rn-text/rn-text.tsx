import React, { FC, ReactNode } from 'react';
import { Text, ViewStyle } from 'react-native';
import { RNTextProps } from './rn-text.types';

const RNText: FC<RNTextProps> = ({ children, text, ...rest }) => {
  const content = children || text;
  const styles = {
    color: rest.color,
    fontWeight: rest.fontWeight,
  } as ViewStyle;
  return (
    <Text testID={'rn-text-id'} style={styles} {...rest}>
      {content as ReactNode}
    </Text>
  );
};

export default RNText;
