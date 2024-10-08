import { createApi } from '@reduxjs/toolkit/query/react';
import { createBaseQuery } from '../network/base-query';

const rootApi = createApi({
  baseQuery: createBaseQuery('root'),
  reducerPath: 'root',
  endpoints: () => ({}),
});

export default rootApi;
