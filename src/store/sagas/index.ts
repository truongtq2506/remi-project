import { all, call } from 'redux-saga/effects';
import moviesSaga from './movies-saga';

function* helloSaga() {
  console.log('helloSaga');
}
export default function* rootSaga() {
  yield all([
    //saga
    call(helloSaga),
    call(moviesSaga),
  ]);
}
