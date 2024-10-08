import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { fetchMoviesRequest, setMovies } from '@/store/slices';
import { useAppDispatch } from '@/store/store';
import { selectMovies } from '@/store/selectors';
import data from '../../assets/data/moviesData.json';
import { generateRandomMovies } from '@/utils/common-util';
// import { useGetMovies, useSetMovies } from '@/api';

const useHomeScreenHooks = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useAppDispatch();

  // const moviesQuery = useGetMovies();
  // const setMoviesQuery = useSetMovies();
  const movieList = useMemo(() => generateRandomMovies(100), []);
  console.log({ movieList });

  useEffect(() => {
    // setMoviesQuery(data.results);
    // dispatch(fetchMoviesRequest());
    dispatch(setMovies(movieList));
  }, [dispatch, movieList]);

  return {
    movies,
  };
};

export default useHomeScreenHooks;
