import { put, select, takeLatest } from 'redux-saga/effects';
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMoviesRequest,
  incrementPage,
} from '../slices';
import { Movie } from '@/screens/types';
import { generateRandomMovies } from '@/utils/common-util';

function* fetchMoviesSaga(action: ReturnType<typeof fetchMoviesRequest>) {
  try {
    const { pageCurrent, isRefreshing } = action.payload;

    const movieList = generateRandomMovies(1000);
    // Simulate API call by slicing the movieList
    const start = pageCurrent * 20;
    const end = start + 20;
    const movies: Movie[] = movieList.slice(start, end);

    // Dispatch success action with new movies
    yield put(fetchMoviesSuccess({ movies, isRefreshing }));

    // If not refreshing, increment page
    if (!isRefreshing) {
      yield put(incrementPage());
    }
  } catch (error) {
    // Handle errors
    yield put(
      fetchMoviesFailure(
        error instanceof Error ? error.message : String(error),
      ),
    );
  }
}

export default function* moviesSaga() {
  yield takeLatest(fetchMoviesRequest.type, fetchMoviesSaga);
}
