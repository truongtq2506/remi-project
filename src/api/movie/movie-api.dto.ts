import { Movie } from '@/screens/types';

export type GetMovieInfoResponseDto = {
  isSuccess?: boolean;
  statusCode?: string;
  statusType?: string;
  data: Movie;
};
