import React, { useCallback } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamLists } from '@/navigation/root-navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import BaseScreen from '@/components/base-screen';
import Header from '@/components/header';
import MovieCard from '@/components/movie-card';
import { useAppDispatch } from '@/store/store';
import { toggleFavorite, bookMovie } from '@/store/slices';
import useBookingDetailScreenHooks from './booking-detail-screen.hooks';

type BookingDetailScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamLists,
  'BookingDetail'
>;

type BookingDetailScreenRouteProps = RouteProp<
  RootStackParamLists,
  'BookingDetail'
>;

const BookingDetailScreen = () => {
  const { navigate, goBack } =
    useNavigation<BookingDetailScreenNavigationProps>();
  const route = useRoute<BookingDetailScreenRouteProps>();
  const dispatch = useAppDispatch();

  const movieId = route.params?.movieId;

  const { movie } = useBookingDetailScreenHooks({ movieId });

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const onPressFavourite = useCallback(() => {
    dispatch(toggleFavorite(movieId));
  }, [dispatch, movieId]);

  const onPressBookTicket = useCallback(() => {
    dispatch(bookMovie(movieId));
    navigate('bottomTabNavigator', { screen: 'Booking' });
  }, [dispatch, movieId, navigate]);

  return (
    <BaseScreen
      testID="booking-detail-screen-id"
      preset="scroll"
      backgroundColor="#fff"
      renderHeader={
        <Header onPressIconLeft={handleBack} title="Booking Detail" />
      }
      safeAreaEdges={['top', 'bottom']}>
      <MovieCard
        bookTicketID="button-book-booking-detail-screen-id"
        isShowBookButton
        isShowFavouriteButton
        movieId={movie?.movieId}
        title={movie?.title}
        thumbnailUrl={movie?.imageurl?.[0]}
        isFavorite={movie?.isFavorite}
        isBooked={movie?.isBooked}
        description={movie?.description}
        onPressFavourite={onPressFavourite}
        onPressBookTicket={onPressBookTicket}
      />
    </BaseScreen>
  );
};

export default BookingDetailScreen;
