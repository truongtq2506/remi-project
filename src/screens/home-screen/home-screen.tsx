import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamLists } from '@/navigation/root-navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import BaseScreen from '@/components/base-screen';
import useHomeScreenHooks from './home-screen.hooks';
import ListMovies from '@/components/list-movies';
import { toggleFavorite } from '@/store/slices';
import { useAppDispatch } from '@/store/store';
import LoadingFooter from '@/components/loading-footer';
import LoadingEmpty from '@/components/loading-empty';
import Toast from 'react-native-toast-message';

type HomeScreenStackNavigationProps = NativeStackNavigationProp<
  RootStackParamLists,
  'bottomTabNavigator'
>;

const HomeScreen = () => {
  const { movies, isRefreshing, loadMore, refresh, isLoadingMore } =
    useHomeScreenHooks();

  const { navigate } = useNavigation<HomeScreenStackNavigationProps>();
  const dispatch = useAppDispatch();

  const onPressFavourite = useCallback(
    (movieId: string, isFavorite?: boolean) => {
      dispatch(toggleFavorite(movieId));
      Toast.show({
        type: 'favouriteFilm',
        position: 'bottom',
        bottomOffset: 100,
        props: {
          isSaved: !isFavorite,
          onPress: () => Toast.hide(),
        },
        visibilityTime: 3000,
      });
    },
    [dispatch],
  );

  const onPressBookTicket = useCallback(
    (movieId: string) => {
      navigate('BookingDetail', { movieId });
    },
    [navigate],
  );

  const listFooterComponent = useCallback(() => {
    return isLoadingMore && <LoadingFooter />;
  }, [isLoadingMore]);

  const listEmptyComponent = useCallback(() => {
    return (
      <LoadingEmpty title="Movie is not exits" body="Please try again!!" />
    );
  }, []);

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
        onRefresh={refresh}
        loadMore={loadMore}
        isRefreshing={isRefreshing}
        isShowFavouriteButton
        onPressFavourite={onPressFavourite}
        onPressBookTicket={onPressBookTicket}
        listFooterComponent={listFooterComponent}
        listEmptyComponent={listEmptyComponent}
      />
    </BaseScreen>
  );
};

export default HomeScreen;
