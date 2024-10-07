import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchMoviesRequest, setMovies } from '@/store/slices';
import { useAppDispatch } from '@/store/store';
import { selectMovies } from '@/store/selectors';
import data from '../../assets/data/moviesData.json';

const useHomeScreenHooks = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch(fetchMoviesRequest());
    const fetchData = async () => {
      // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      // const data = await response.json();
      dispatch(setMovies(data.results));
    };
    fetchData();
  }, [dispatch]);

  return {
    movies,
  };
};

export default useHomeScreenHooks;
