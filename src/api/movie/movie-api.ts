import { Movie } from '@/screens/types';
import baseMoviesApi from './base-movie-api';
import { GetMovieInfoResponseDto } from './movie-api.dto';

const movieApi = baseMoviesApi.injectEndpoints({
  endpoints: build => ({
    getMovieInfo: build.query<Movie, void>({
      query: () => ({
        method: 'GET',
        url: 'movie/info',
      }),
      transformResponse: (response: GetMovieInfoResponseDto, _meta, _arg) => {
        return {
          imageurl: response.data.imageurl,
          movieId: response.data.movieId,
          title: response.data.title,
          description: response.data.description,
          thumbnail: response.data.thumbnail,
          isFavorite: response.data.isFavorite,
          isBooked: response.data.isBooked,
          timestamp: response.data.timestamp,
        };
      },
    }),
  }),
});

export default movieApi;
