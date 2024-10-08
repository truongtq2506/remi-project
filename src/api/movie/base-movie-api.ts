import { createApi } from '@reduxjs/toolkit/query';
import { createBaseQuery } from '../network/base-query';

const baseMoviesApi = createApi({
  baseQuery: createBaseQuery('movie'),
  reducerPath: 'movie',
  endpoints: () => ({}),
});

export default baseMoviesApi;
