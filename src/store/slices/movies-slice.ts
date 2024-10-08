import { Movie } from '@/screens/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface MoviesState {
  isLoading: boolean;
  error: string | null;
  movies: Movie[];
  isRefreshing: boolean;
  isLoadingMore: boolean;
  pageCurrent: number;
  hasMore: boolean;
}

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  isLoadingMore: false,
  error: null,
  isRefreshing: false,
  pageCurrent: 0,
  hasMore: true,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    getMovies: (state, _) => {
      state.movies = state.movies;
    },

    fetchMoviesRequest: (
      state,
      action: PayloadAction<{ pageCurrent: number; isRefreshing: boolean }>,
    ) => {
      if (action.payload.isRefreshing) {
        state.isRefreshing = true;
      } else if (state.pageCurrent > 0) {
        state.isLoadingMore = true;
      } else {
        state.isLoading = true;
      }
      state.error = null;
    },
    fetchMoviesSuccess: (
      state,
      action: PayloadAction<{ movies: Movie[]; isRefreshing: boolean }>,
    ) => {
      const { movies, isRefreshing } = action.payload;
      if (isRefreshing) {
        state.movies = movies;
        state.isRefreshing = false;
      } else {
        state.movies = [...state.movies, ...movies];
        state.isLoadingMore = false;
      }
      state.isLoading = false;
      state.hasMore = movies.length > 0;
    },
    fetchMoviesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isRefreshing = false;
      state.isLoadingMore = false;
      state.error = action.payload;
    },
    incrementPage: state => {
      state.pageCurrent += 1;
    },
    resetMoviesState: state => {
      state.pageCurrent = 0;
      state.hasMore = true;
      state.isLoadingMore = false;
      state.movies = [];
    },
    toggleFavorite: (state, action) => {
      const movieId = action.payload;
      const movie = state.movies.find(mov => mov.movieId === movieId);
      if (movie) {
        movie.isFavorite = !movie.isFavorite;
        if (movie.isFavorite) {
          movie.timestamp = Date.now();
        } else {
          delete movie.timestamp;
        }
      }
    },
    bookMovie: (state, action) => {
      const movieId = action.payload;
      const movie = state.movies.find(mov => mov.movieId === movieId);
      if (movie) {
        movie.isBooked = !movie.isBooked;
        if (movie.isBooked) {
          movie.timestamp = Date.now();
        } else {
          delete movie.timestamp;
        }
      }
    },
  },
});

export const {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  incrementPage,
  resetMoviesState,
  toggleFavorite,
  bookMovie,
  setMovies,
  getMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
