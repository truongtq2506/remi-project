import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamLists } from '@/navigation/root-navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import BaseScreen from '@/components/base-screen';
import useHomeScreenHooks from './home-screen.hooks';
import ListMovies from '@/components/list-movies';
import { toggleFavorite } from '@/store/slices';
import { useAppDispatch } from '@/store/store';

type HomeScreenStackNavigationProps = NativeStackNavigationProp<
  RootStackParamLists,
  'bottomTabNavigator'
>;

const HomeScreen = () => {
  const { movies } = useHomeScreenHooks();

  const { navigate } = useNavigation<HomeScreenStackNavigationProps>();
  const dispatch = useAppDispatch();

  const onPressFavourite = useCallback(
    (movieId: string) => {
      dispatch(toggleFavorite(movieId));
    },
    [dispatch],
  );

  const onPressBookTicket = useCallback(
    (movieId: string) => {
      navigate('BookingDetail', { movieId });
    },
    [navigate],
  );

  return (
    <BaseScreen
      testID="home-screen-id"
      preset="fixed"
      safeAreaEdges={['top', 'bottom']}>
      <ListMovies
        testID="home-list-movies"
        movies={movies}
        bookTicketID="button-book-home-screen-id"
        isShowBookButton
        isShowFavouriteButton
        onPressFavourite={onPressFavourite}
        onPressBookTicket={onPressBookTicket}
      />
    </BaseScreen>
  );
};

export default HomeScreen;
