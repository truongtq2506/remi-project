export type NetworkConfig = {
  movieUrl: string;
  baseUrl: string;
  rootUrl: string;
  timeoutMs: number;
  headers?: Record<string, string>;
};

export type FetcherType = 'movie' | 'root' | 'base';
