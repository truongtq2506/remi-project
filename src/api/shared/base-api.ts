import { createApi } from '@reduxjs/toolkit/query/react';
import { createBaseQuery } from '../network/base-query';

const baseApi = createApi({
  baseQuery: createBaseQuery('base'),
  reducerPath: 'base',
  endpoints: () => ({}),
});

export default baseApi;
