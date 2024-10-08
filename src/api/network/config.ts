import axios, { AxiosError, AxiosResponse } from 'axios';

import { UNIQUE_ID, API_VERSION } from './contants';
import { NetworkConfig } from './types';
import { setFetchers } from './fetchers';

type QueueItem = {
  resolve: (value: unknown) => void;
  reject: (reason: unknown) => void;
};

let isRefreshing = false;
let waitingQueue: QueueItem[] = [];
let rootDomainInterceptor: number;

export const API_HEADER = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json; charset=utf-8',
  UniquieId: UNIQUE_ID,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
  'Access-Control-Allow-Headers':
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
  APIVersion: API_VERSION,
};

const processQueue = (error: AxiosError | null) => {
  waitingQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(true);
    }
  });
  waitingQueue = [];
};

const responseSuccessCallback = (response: AxiosResponse) => response;

const DefaultNetworkConfig: NetworkConfig = {
  movieUrl: 'https://api.themoviedb.org/3',
  baseUrl: 'https://api.themoviedb.org/3',
  rootUrl: 'https://api.themoviedb.org/3',
  headers: { 'user-agent': 'Dev-Fe/Default (Default; Default; Default)' },
  timeoutMs: 30000,
};

let currentNetworkConfig: NetworkConfig = Object.freeze(DefaultNetworkConfig);

export const getNetworkConfig = (): NetworkConfig => currentNetworkConfig;

export const setNetworkConfig = (configs: NetworkConfig): void => {
  currentNetworkConfig = Object.freeze(configs);
  const movieFetcher = axios.create({
    baseURL: configs.movieUrl,
    headers: { ...API_HEADER, ...configs.headers },
    timeout: configs.timeoutMs,
    withCredentials: true,
  });

  const baseFetcher = axios.create({
    baseURL: configs.baseUrl,
    headers: { ...API_HEADER, ...configs.headers },
    timeout: configs.timeoutMs,
    withCredentials: true,
  });

  const rootFetcher = axios.create({
    baseURL: configs.rootUrl,
    headers: { ...API_HEADER, ...configs.headers },
    timeout: configs.timeoutMs,
    withCredentials: true,
  });

  const responseFailCallback = async (
    error: AxiosError & { config: { retry: boolean } },
  ) => {
    const originalRequest = error?.config;
    if (error?.response?.status === 401 && !originalRequest?.retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          waitingQueue.push({ resolve, reject });
        })
          .then(() => axios(originalRequest))
          .catch(err => Promise.reject(err));
      }
      originalRequest.retry = true;
      isRefreshing = true;
      try {
        rootFetcher.interceptors.response.eject(rootDomainResponseInterceptor);
        rootFetcher.interceptors.response.eject(rootDomainInterceptor);
        const res = await rootFetcher.get('/auth/refresh');
        if (res?.data?.isSuccess) {
          processQueue(null);
          return axios(originalRequest);
        } else {
          throw new Error('Refresh token failed');
        }
      } catch (e) {
        processQueue(e as AxiosError);
      } finally {
        isRefreshing = false;
        rootDomainInterceptor = rootFetcher.interceptors.response.use(
          responseSuccessCallback,
          responseFailCallback,
        );
      }
    }
    throw error;
  };

  const rootDomainResponseInterceptor = rootFetcher.interceptors.response.use(
    responseSuccessCallback,
    responseFailCallback,
  );

  baseFetcher.interceptors.response.use(
    responseSuccessCallback,
    responseFailCallback,
  );

  setFetchers({
    baseFetcher,
    rootFetcher,
    movieFetcher,
  });
};

setNetworkConfig(DefaultNetworkConfig);
