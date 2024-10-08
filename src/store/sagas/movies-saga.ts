import { call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import dataMovie from '../../assets/data/moviesData.json';
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMoviesRequest,
} from '../slices';
import { useSetMovies } from '@/api';
import movieApi from '@/api/movie';
import { Movie } from '@/screens/types';

const fetchMoviesApi = () => {
  const options = {
    method: 'GET',
    url: 'https://ott-details.p.rapidapi.com/advancedsearch',
    params: {
      start_year: '1970',
      end_year: '2020',
      min_imdb: '6',
      max_imdb: '7.8',
      genre: 'action',
      language: 'english',
      type: 'movie',
      sort: 'latest',
      page: '1',
    },
    headers: {
      'x-rapidapi-key': 'bccca0dbc3msh94daf6321fa515bp16f897jsn4401c1e028ee',
      'x-rapidapi-host': 'ott-details.p.rapidapi.com',
    },
  };

  return axios.request(options);
};

function* getMovies(_: ReturnType<typeof fetchMoviesRequest>): any {
  try {
    const response = yield call(fetchMoviesApi);
    yield put(fetchMoviesSuccess(response.data.results));
  } catch (error) {
    yield put(fetchMoviesFailure(error));
  }
}

// function* queryMoviesSaga(_: ReturnType<typeof fetchMoviesRequest>): any {
//   try {
// I try to combine using RTK query vs saga it seems like not working
// const setMovies = yield call(useSetMovies);
// yield call(setMovies, dataMovie.results);
// const result = yield call(movieApi.endpoints.setMovies.initiate, dataMovie);
// console.log('result', result.data);
//   } catch (error) {
//     yield put({ type: fetchMoviesFailure.type, payload: error });
//   }
// }

export default function* moviesSaga() {
  yield takeLatest(fetchMoviesRequest.type, getMovies);
  // yield takeLatest(fetchMoviesRequest.type, queryMoviesSaga);
}
