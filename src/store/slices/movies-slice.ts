import { Movie } from '@/screens/types';
import { createSlice } from '@reduxjs/toolkit';
export interface MoviesState {
  page: number;
  loading: boolean;
  error: string | null;
  movies: Movie[];
}

const initialState: MoviesState = {
  page: 1,
  loading: false,
  error: null,
  movies: [],
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
    fetchMoviesRequest: state => {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, action) => {
      state.movies = [...state.movies, ...action.payload];
      state.loading = false;
    },
    fetchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    incrementPage: state => {
      state.page += 1;
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
  toggleFavorite,
  bookMovie,
  setMovies,
  getMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
