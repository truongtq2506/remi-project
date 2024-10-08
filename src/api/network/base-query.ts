import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { getFetcher } from './fetchers';
import type { FetcherType } from './types';
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
  async ({ url, method, data, params }) => {
    try {
      const response = await getFetcher(type)({
        url,
        method,
        data,
        params,
      });
      return { data: response.data };
    } catch (error) {
      let message = 'An error occurred';
      if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<{
          statusCode?: string;
          message?: string;
        }>;
        message = getErrorMessage(axiosError.response?.data?.message);
        if (message) {
          return {
            error: message,
          };
        }
      }
      return {
        error: error instanceof Error ? error.message : message,
      };
    }
  };
