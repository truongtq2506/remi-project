import React, { memo, FC } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import RNText from '../rn-text';

const MAX_WIDTH = 328;
const MAX_HEIGHT = 192;

interface LoadingEmptyProps extends Omit<ViewProps, 'children'> {
  title: string;
  body: string;
}

const LoadingEmpty: FC<LoadingEmptyProps> = ({ title, body, ...props }) => {
  return (
    <View {...props}>
      <View style={styles.descriptionContainer}>
        <RNText numberOfLines={2} style={styles.text}>
          {title}
        </RNText>
        <RNText style={[styles.text]}>{body}</RNText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
    marginHorizontal: 8,
    marginTop: 16,
  },
  text: {
    textAlign: 'center',
    marginTop: 8,
  },
  image: {
    aspectRatio: MAX_WIDTH / MAX_HEIGHT,
    maxHeight: MAX_HEIGHT,
    maxWidth: MAX_WIDTH,
    width: '100%',
    alignSelf: 'center',
  },
});

export default memo(LoadingEmpty);
