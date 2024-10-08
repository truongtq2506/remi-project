import React, { FC, ReactNode, useCallback, useMemo } from 'react';
import { StyleSheet, ViewStyle, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MovieCard from '@/components/movie-card';
import { ScreenHeight, ScreenWidth } from '@/utils';
import { useBottomTabBarHeightValue } from '@/hooks/app-hooks';
import { Movie } from '@/screens/types';

interface IListMovies {
  testID?: string;
  bookTicketID?: string;
  movies: Movie[];
  insetBottom?: number;
  isShowFavouriteButton?: boolean;
  horizontal?: boolean;
  pagingEnabled?: boolean;
  isShowBookButton?: boolean;
  isRefreshing?: boolean;
  listFooterComponent?: () => ReactNode;
  listEmptyComponent?: () => ReactNode;
  loadMore?: () => void;
  onRefresh?: () => void;
  onPressFavourite?: (movieId: string, isFavorite?: boolean) => void;
  onPressBookTicket?: (movieId: string) => void;
}

const ListMovies: FC<IListMovies> = ({
  testID,
  movies,
  insetBottom = 0,
  isShowFavouriteButton,
  isShowBookButton,
  isRefreshing,
  bookTicketID,
  pagingEnabled,
  horizontal,
  listFooterComponent,
  listEmptyComponent,
  onRefresh,
  loadMore,
  onPressFavourite,
  onPressBookTicket,
}) => {
  const insets = useSafeAreaInsets();
  const { bottomTabBarHeight } = useBottomTabBarHeightValue();

  const renderItems = useCallback(
    ({ item, index }: { item: Movie; index: number }) => {
      return (
        <MovieCard
          key={index}
          movieId={item.movieId}
          title={item.title}
          thumbnailUrl={item.imageurl?.[0]}
          description={item.description}
          isFavorite={item.isFavorite}
          isBooked={item.isBooked}
          style={styles.movieCard}
          isShowFavouriteButton={isShowFavouriteButton}
          isShowBookButton={isShowBookButton}
          onPressFavourite={onPressFavourite}
          bookTicketID={bookTicketID}
          onPressBookTicket={onPressBookTicket}
        />
      );
    },
    [
      bookTicketID,
      isShowBookButton,
      isShowFavouriteButton,
      onPressBookTicket,
      onPressFavourite,
    ],
  );

  const keyExtractor = useCallback((item: Movie) => item.movieId, []);

  const containerStyle = useMemo(
    () => ({
      paddingBottom: insetBottom + bottomTabBarHeight + insets.top / 1.5,
    }),
    [bottomTabBarHeight, insetBottom, insets.top],
  );

  return (
    <View testID={testID} style={[styles.container, containerStyle]}>
      <FlashList
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        onEndReached={loadMore}
        horizontal={horizontal}
        pagingEnabled={pagingEnabled}
        keyExtractor={keyExtractor}
        renderItem={renderItems}
        data={movies}
        estimatedItemSize={300}
        ListFooterComponent={listFooterComponent}
        ListEmptyComponent={listEmptyComponent}
      />
    </View>
  );
};

interface Style {
  container: ViewStyle;
  movieCard: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    height: ScreenHeight,
    width: ScreenWidth,
    backgroundColor: 'grey',
  },
  movieCard: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: ScreenWidth,
    marginBottom: 16,
  },
});

export default ListMovies;
