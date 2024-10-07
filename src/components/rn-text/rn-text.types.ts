import { ReactNode } from 'react';
import { TextProps, TextStyle } from 'react-native';

export interface IRNTextProps {
  children?: ReactNode;
  text?: string;
}

export type RNTextProps = IRNTextProps & TextProps & TextStyle;
