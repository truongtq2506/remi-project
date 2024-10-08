import React, { FC } from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { Svg } from '../svg-icon/svg-icon.types';
import SvgIcon from '../svg-icon';
import { SvgArrowLeft } from '@/assets/svgs';

interface IBackButton {
  testID?: string;
  style?: ViewStyle;
  icon?: Svg;
  onPressIcon?: () => void;
}

const BackButton: FC<IBackButton> = ({
  testID = 'header-id',
  icon = SvgArrowLeft,
  onPressIcon,
  style,
}) => {
  return (
    <Pressable
      testID={testID}
      style={[styles.container, style]}
      hitSlop={hitSlop}
      onPress={onPressIcon}>
      <Pressable style={styles.backButton} onPress={onPressIcon}>
        <SvgIcon icon={icon} />
      </Pressable>
    </Pressable>
  );
};

const hitSlop = {
  top: 12,
  bottom: 12,
  left: 12,
  right: 12,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C1C9D2',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default BackButton;
