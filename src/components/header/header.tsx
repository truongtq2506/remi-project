import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native';
import SvgIcon from '../svg-icon';
import BackButton from '../button-back';
import { Svg } from '../svg-icon/svg-icon.types';
import RnText from '../rn-text';
import { ScreenWidth } from '@/utils';

interface IHeader {
  testID?: string;
  title?: string;
  style?: ViewStyle;
  iconLeft?: Svg;
  iconRight?: Svg;
  onPressIconLeft?: () => void;
  onPressIconRight?: () => void;
}

const Header: FC<IHeader> = ({
  testID = 'header-id',
  title,
  iconLeft,
  iconRight,
  onPressIconLeft,
  style,
}) => {
  return (
    <SafeAreaView testID={testID} style={style}>
      <View style={styles.container}>
        <BackButton icon={iconLeft} onPressIcon={onPressIconLeft} />
        <View style={styles.title}>
          <RnText text={title} />
        </View>
        {iconRight && <SvgIcon icon={iconRight} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
    paddingLeft: 16,
  },
  title: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: ScreenWidth,
  },
});
export default Header;
