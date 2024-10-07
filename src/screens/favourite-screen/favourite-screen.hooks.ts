import { selectFavouriteMovies } from '@/store/selectors';
import { useSelector } from 'react-redux';

const useFavouriteScreenHooks = () => {
  const movies = useSelector(selectFavouriteMovies);
  console.log('useFavouriteScreenHooks ', movies);
  return {
    movies,
  };
};

export default useFavouriteScreenHooks;
