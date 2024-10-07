import { selectBookedMovies } from '@/store/selectors';
import { useSelector } from 'react-redux';

const useBookingScreenHooks = () => {
  const movies = useSelector(selectBookedMovies);

  return {
    movies,
  };
};

export default useBookingScreenHooks;
