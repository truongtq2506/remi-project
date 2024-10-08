import React, { useMemo } from 'react';

import BaseScreen from '@/components/base-screen';
import RnText from '@/components/rn-text';
import { View } from 'react-native';
import styles from './favourite-screen.styles';
import Divider from '@/components/divider';
import useFavouriteScreenHooks from './favourite-screen.hooks';
import ListMovies from '@/components/list-movies';
import { useLayoutHeight } from '@/hooks';

const FavouriteScreen = () => {
  const { movies: favouriteMovies } = useFavouriteScreenHooks();
  const { height, onLayout } = useLayoutHeight();

  const renderHeader = useMemo(() => {
    return (
      <View onLayout={onLayout}>
        <View style={styles.header}>
          <RnText text="Favourite Movie" />
        </View>
        <Divider />
      </View>
    );
  }, [onLayout]);

  return (
    <BaseScreen
      testID="favourite-screen-id"
      preset="fixed"
      renderHeader={renderHeader}
      safeAreaEdges={['top', 'bottom']}>
      <ListMovies
        movies={favouriteMovies}
        insetBottom={height}
        horizontal
        pagingEnabled
      />
    </BaseScreen>
  );
};

export default FavouriteScreen;
