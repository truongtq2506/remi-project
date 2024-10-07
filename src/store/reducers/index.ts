import { combineReducers } from '@reduxjs/toolkit';

import moviesReducer from '../slices/movies-slice';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
