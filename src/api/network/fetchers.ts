import { AxiosInstance } from 'axios';
import { FetcherType } from './types';

let movieAxiosInstance: AxiosInstance;
let baseAxiosInstance: AxiosInstance;
let rootAxiosInstance: AxiosInstance;

export const getFetcher = (type: FetcherType): AxiosInstance => {
  switch (type) {
    case 'movie':
      return movieAxiosInstance;
    case 'base':
      return baseAxiosInstance;
    case 'root':
      return rootAxiosInstance;
  }
};

export const setFetchers = (fetchers: {
  movieFetcher: AxiosInstance;
  baseFetcher: AxiosInstance;
  rootFetcher: AxiosInstance;
}) => {
  if (fetchers.movieFetcher) {
    movieAxiosInstance = fetchers.movieFetcher;
  }
  if (fetchers.baseFetcher) {
    baseAxiosInstance = fetchers.baseFetcher;
  }
  if (fetchers.rootFetcher) {
    rootAxiosInstance = fetchers.rootFetcher;
  }
};
