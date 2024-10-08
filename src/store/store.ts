import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import rootSaga from './sagas';
import rootReducer from './reducers';
import { baseMoviesApi } from '@/api';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, baseMoviesApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

// Infer the RootState and AppDispatch types from store itself
export type RootState = ReturnType<typeof store.getState>;

// Infer type: { accountInfo: AccountInforSate}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
