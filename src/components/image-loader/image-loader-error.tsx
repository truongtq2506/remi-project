import React, { FC } from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';

import Images from '@/assets/images';
import RnText from '../rn-text';

interface IImageLoaderError {
  title?: string;
  contentStyle?: ViewStyle | ViewStyle[];
}

const ImageLoaderError: FC<IImageLoaderError> = ({ contentStyle }) => {
  return (
    <View style={[styles.container, contentStyle]}>
      <Image source={Images.media_error_loading} style={[styles.image]} />
      <RnText text="Unable to load image" style={styles.errorText} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF1F5',
  },
  image: {
    width: 40,
    height: 40,
  },
  errorText: {
    marginTop: 10,
    color: 'red',
    fontSize: 14,
  },
});

export default ImageLoaderError;
