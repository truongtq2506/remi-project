import React, { FC, memo } from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

import RnText from '../rn-text';

interface IButtonBookTicket {
  testID?: string;
  movieId?: string;
  style?: ViewStyle;
  isBooked?: boolean;
  onPress?: (movieId: string) => void;
}

const ButtonBookTicket: FC<IButtonBookTicket> = ({
  testID,
  movieId,
  style,
  isBooked,
  onPress,
}) => {
  const title = isBooked ? 'Booked' : 'Book Ticket';
  const onPressItem = () => {
    movieId && onPress?.(movieId);
  };
  return (
    <TouchableOpacity
      testID={testID}
      disabled={isBooked}
      style={[styles.container, style]}
      onPress={onPressItem}>
      <RnText text={title} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#C1C9D2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});

export default memo(ButtonBookTicket);
