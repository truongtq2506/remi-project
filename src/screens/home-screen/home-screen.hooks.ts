import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchMoviesRequest, setMovies } from '@/store/slices';
import { useAppDispatch } from '@/store/store';
import { selectMovies } from '@/store/selectors';
import data from '../../assets/data/moviesData.json';
// import { useGetMovies, useSetMovies } from '@/api';

const useHomeScreenHooks = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useAppDispatch();

  // const moviesQuery = useGetMovies();
  // const setMoviesQuery = useSetMovies();

  useEffect(() => {
    // setMoviesQuery(data.results);
    // dispatch(fetchMoviesRequest());
    const fetchData = async () => {
      dispatch(setMovies(data.results));
    };
    fetchData();
  }, [dispatch]);

  return {
    movies,
  };
};

export default useHomeScreenHooks;
