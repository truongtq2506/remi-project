import { ReactNode } from 'react';
import {
  KeyboardAvoidingViewProps,
  ScrollViewProps,
  StatusBarProps,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { ExtendedEdge } from '@/hooks/useSafeAreaInsetStyles';

export interface BaseScreenProps extends ViewProps {
  contentContainerStyle?: StyleProp<ViewStyle>;
  safeAreaEdges?: ExtendedEdge[];
  backgroundColor?: string;
  statusBarStyle?: 'light-content' | 'dark-content' | 'default';
  keyboardOffset?: number;
  statusBarProps?: StatusBarProps;
  keyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
  renderHeader?: ReactNode;
  footer?: ReactNode;
}

export interface FixedScreenProps extends BaseScreenProps {
  preset?: 'fixed';
}

export interface ScrollScreenProps extends BaseScreenProps {
  preset?: 'scroll';
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
  scrollViewProps?: ScrollViewProps;
}

export interface AutoScreenProps extends Omit<ScrollScreenProps, 'preset'> {
  preset?: 'auto';
  scrollEnabledToggleThreshold?: { percent?: number; point?: number };
}

export type ScreenProps =
  | ScrollScreenProps
  | FixedScreenProps
  | AutoScreenProps;

export type ScreenPresset = 'fixed' | 'scroll' | 'auto';

export function isNonScrolling(preset?: ScreenPresset) {
  return !preset || preset === 'fixed';
}
