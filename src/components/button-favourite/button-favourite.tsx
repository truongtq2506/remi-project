import React, { FC, memo } from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';

import SvgIcon from '../svg-icon';
import { SvgHeart, SvgHeartBlank } from '@/assets/svgs';

interface IButtonFavourite {
  testID?: string;
  movieId?: string;
  isFavorite?: boolean;
  style?: ViewStyle;
  onPress?: (movieId: string) => void;
}

const ButtonFavourite: FC<IButtonFavourite> = ({
  testID,
  movieId,
  isFavorite,
  onPress,
  style,
}) => {
  const handlePress = () => {
    movieId && onPress?.(movieId);
  };

  return (
    <Pressable
      testID={testID}
      style={[styles.container, style]}
      onPress={handlePress}>
      <View style={styles.wrapHeartContent}>
        <SvgIcon icon={isFavorite ? SvgHeart : SvgHeartBlank} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#C1C9D2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapHeartContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(ButtonFavourite);
