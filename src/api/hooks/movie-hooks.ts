import { useCallback } from 'react';

import { useMutationValue } from './common-hooks';
import { Movie } from '@/screens/types';
import { useSetMoviesMutation } from '../movie/movie-api';

export const useGetMovies = () => {
  const [, result] = useSetMoviesMutation({
    fixedCacheKey: 'movie-data',
  });
  return useMutationValue<Movie[] | undefined>(result);
};

export const useSetMovies = () => {
  const [updater] = useSetMoviesMutation({
    fixedCacheKey: 'movie-data',
  });
  return useCallback(
    (movies: Movie[]) => {
      if (movies) {
        updater(movies);
      }
    },
    [updater],
  );
};
