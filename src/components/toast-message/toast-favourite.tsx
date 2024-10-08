import React, { memo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ToastConfigParams } from 'react-native-toast-message';

import { ScreenWidth } from '@/utils';
import RNText from '../rn-text';
import SvgIcon from '../svg-icon';
import { FavouriteToastType } from './toast-types';
import { SvgFavouriteSaved, SvgFavouriteUnSaved } from '@/assets/svgs';

const ToastFavourite = (
  toastProps: JSX.IntrinsicAttributes & ToastConfigParams<FavouriteToastType>,
) => {
  const {
    props: { isSaved, onPress },
  } = toastProps;

  const text = isSaved ? 'Lưu film thành công' : 'Đã bỏ lưu film';
  const icon = isSaved ? SvgFavouriteSaved : SvgFavouriteUnSaved;
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <SvgIcon icon={icon} color="#fff" />
      <RNText text={text} color="#fff" flex={1} marginLeft={16} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1F22',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 20,
    width: ScreenWidth - 32,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
});

export default memo(ToastFavourite);
