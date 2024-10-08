import { selectFavouriteMovies } from '@/store/selectors';
import { useSelector } from 'react-redux';

const useFavouriteScreenHooks = () => {
  const movies = useSelector(selectFavouriteMovies);
  return {
    movies,
  };
};

export default useFavouriteScreenHooks;
