import React, { useMemo } from 'react';
import { View } from 'react-native';

import BaseScreen from '@/components/base-screen';
import RnText from '@/components/rn-text';
import styles from './booking-screen.styles';
import Divider from '@/components/divider';
import useBookingScreenHooks from './booking-screen.hooks';
import ListMovies from '@/components/list-movies';
import { useLayoutHeight } from '@/hooks';

const BookingScreen = () => {
  const { movies: bookingMovies } = useBookingScreenHooks();
  const { height, onLayout } = useLayoutHeight();
  const renderHeader = useMemo(() => {
    return (
      <View onLayout={onLayout}>
        <View style={styles.header}>
          <RnText text="Booking Movie" />
        </View>
        <Divider />
      </View>
    );
  }, [onLayout]);

  return (
    <BaseScreen
      testID="booking-screen-id"
      preset="fixed"
      backgroundColor="#fff"
      renderHeader={renderHeader}
      safeAreaEdges={['top', 'bottom']}>
      <ListMovies movies={bookingMovies} insetBottom={height} />
    </BaseScreen>
  );
};

export default BookingScreen;
