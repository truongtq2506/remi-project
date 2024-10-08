import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { AxiosError, AxiosRequestConfig } from 'axios';

import { FetcherType } from './types';
import { getFetcher } from './fetchers';
import { getErrorMessage } from './error-message';

export const createBaseQuery =
  (
    type: FetcherType,
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method = 'GET', data, params }) => {
    try {
      const response = await getFetcher(type)({
        url,
        method,
        data,
        params,
      });
      return { data: response.data };
    } catch (error) {
      let errMgs = 'An error occurred';
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<{
          statusCode?: string;
          message?: string;
        }>;
        errMgs = getErrorMessage(axiosError?.response?.data?.message);
        if (errMgs) {
          return { error: errMgs };
        }
      }
      return {
        error: error instanceof Error ? error.message : errMgs,
      };
    }
  };
