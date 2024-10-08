import { combineReducers } from '@reduxjs/toolkit';

import moviesReducer from '../slices/movies-slice';
import { baseMoviesApi } from '@/api';

const rootReducer = combineReducers({
  movies: moviesReducer,
  [baseMoviesApi.reducerPath]: baseMoviesApi.reducer,
});

export default rootReducer;
