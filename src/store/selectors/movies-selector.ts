import { createSelector } from '@reduxjs/toolkit';
import { MoviesState } from '../slices';
import { RootState } from '../store';

const moviesSelector = (state: RootState) => state.movies;

export const selectMovies = createSelector(
  moviesSelector,
  (state: MoviesState) => state.movies,
);

export const selectMovieById = (movieId?: string) =>
  createSelector(moviesSelector, (state: MoviesState) =>
    state.movies.find(movie => movie.movieId === movieId),
  );

export const selectFavouriteMovies = createSelector(
  moviesSelector,
  (state: MoviesState) =>
    state.movies
      .filter(movie => movie.isFavorite)
      .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0)),
);

export const selectBookedMovies = createSelector(
  moviesSelector,
  (state: MoviesState) =>
    state.movies
      .filter(movie => movie.isBooked)
      .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0)),
);
