import React, { FC, ReactNode, useRef, useState } from 'react';
import {
  Appearance,
  KeyboardAvoidingView,
  LayoutChangeEvent,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import { useSafeAreaInsetsStyle } from '@/hooks';
import styles from './base-screen.styles';
import {
  AutoScreenProps,
  isNonScrolling,
  ScreenProps,
  ScrollScreenProps,
} from './base-screen.types';
import { isIOS } from '@/utils';

const behavior = isIOS() ? 'padding' : 'height';

export const useAutoPreset = (
  props: AutoScreenProps,
): {
  scrollEnabled: boolean;
  onContentSizeChange: (w: number, h: number) => void;
  onLayout: (e: LayoutChangeEvent) => void;
} => {
  const { preset, scrollEnabledToggleThreshold } = props;
  const { percent = 0.92, point = 0 } = scrollEnabledToggleThreshold || {};
  const scrollViewHeight = useRef<null | number>(null);
  const scrollViewContentHeight = useRef<null | number>(null);
  const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);

  const updateScrollState = () => {
    if (!scrollViewHeight.current || !scrollViewContentHeight.current) return;
    // check whether content fits the screen then toggle scroll state according to it
    const contentFitsScreen = (function () {
      if (point) {
        return (
          scrollViewContentHeight.current < scrollViewHeight.current - point
        );
      } else {
        return (
          scrollViewContentHeight.current < scrollViewHeight.current * percent
        );
      }
    })();
    // content is less than the size of the screen, so we can disable scrolling
    if (scrollEnabled && contentFitsScreen) {
      setScrollEnabled(false);
    }
    // content is greater than the size of the screen, solet's enable scrolling
    if (!scrollEnabled && !contentFitsScreen) {
      setScrollEnabled(true);
    }
  };

  const onContentSizeChange = (_: number, h: number) => {
    // update scroll-view content height
    scrollViewContentHeight.current = h;
    updateScrollState();
  };
  /**
   *
   * @param {LayoutChangeEvent} e = The layout change event.
   */
  const onLayout = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;
    // update scroll-view height
    scrollViewHeight.current = height;
    updateScrollState();
  };

  // update scroll state on every render
  if (preset === 'auto') {
    updateScrollState();
  }

  return {
    scrollEnabled: preset === 'auto' ? scrollEnabled : true,
    onContentSizeChange,
    onLayout,
  };
};

const ScreenWithoutScrolling = (props: ScreenProps) => {
  const { children, contentContainerStyle } = props as ScrollScreenProps;

  return (
    <View testID="fix-view-id" style={styles.outerStyle}>
      <View style={[styles.innerStyle, contentContainerStyle]}>
        {children as ReactNode}
      </View>
    </View>
  );
};

const ScreenWidthScrolling = (props: ScreenProps) => {
  const {
    children,
    keyboardShouldPersistTaps = 'handled',
    contentContainerStyle,
    scrollViewProps,
  } = props as ScrollScreenProps;

  const ref = useRef<ScrollView>(null);
  const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(
    props as AutoScreenProps,
  );

  const onLayoutScroll = (e: LayoutChangeEvent) => {
    onLayout(e);
    scrollViewProps?.onLayout?.(e);
  };

  const onContentSizeChangeScroll = (w: number, h: number) => {
    onContentSizeChange(w, h);
    scrollViewProps?.onContentSizeChange?.(w, h);
  };

  return (
    <ScrollView
      testID="scroll-view-id"
      {...{ keyboardShouldPersistTaps, scrollEnabled, ref }}
      {...scrollViewProps}
      onLayout={onLayoutScroll}
      onContentSizeChange={onContentSizeChangeScroll}
      style={[styles.outerStyle, scrollViewProps?.style]}
      contentContainerStyle={[
        styles.innerStyle,
        scrollViewProps?.contentContainerStyle,
        contentContainerStyle,
      ]}>
      {children as ReactNode}
    </ScrollView>
  );
};

const BaseScreen: FC<ScreenProps> = props => {
  const {
    preset,
    testID = 'base-screen-id',
    backgroundColor,
    keyboardAvoidingViewProps,
    keyboardOffset,
    safeAreaEdges,
    statusBarProps,
    renderHeader,
    statusBarStyle,
    footer,
  } = props;
  const containerInsets = useSafeAreaInsetsStyle(safeAreaEdges);

  const defaultStatusBarStyle =
    Appearance.getColorScheme() === 'dark' ? 'light-content' : 'dark-content';
  return (
    <View
      testID={testID}
      style={[styles.containerStyle, { backgroundColor }, containerInsets]}>
      <StatusBar
        barStyle={statusBarStyle ?? defaultStatusBarStyle}
        {...statusBarProps}
      />
      <KeyboardAvoidingView
        behavior={behavior}
        keyboardVerticalOffset={keyboardOffset}
        {...keyboardAvoidingViewProps}
        style={[
          styles.keyboardAvoidingViewStyle,
          keyboardAvoidingViewProps?.style,
        ]}>
        {renderHeader && renderHeader}
        {isNonScrolling(preset) ? (
          <ScreenWithoutScrolling {...props} />
        ) : (
          <ScreenWidthScrolling {...props} />
        )}
      </KeyboardAvoidingView>
      {footer && footer}
    </View>
  );
};

export default BaseScreen;
