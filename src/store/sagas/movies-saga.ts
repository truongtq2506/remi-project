import { call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMoviesRequest,
} from '../slices';

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

export default function* moviesSaga() {
  yield takeLatest(fetchMoviesRequest.type, getMovies);
}
