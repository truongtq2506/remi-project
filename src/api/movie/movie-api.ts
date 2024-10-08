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
    setMovies: build.mutation<Movie[], Movie[]>({
      queryFn: movies => ({
        data: movies,
      }),
    }),
    setMovies1: build.mutation<any, any>({
      query: movies => ({
        url: 'movies', // Set your actual API endpoint or if mock, don't worry about it
        method: 'POST',
        body: movies,
      }),
    }),
  }),
});

export const { useSetMoviesMutation } = movieApi;

export default movieApi;
