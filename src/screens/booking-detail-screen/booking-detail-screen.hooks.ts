import { selectMovieById } from '@/store/selectors';
import { useSelector } from 'react-redux';

const useBookingDetailScreenHooks = ({ movieId }: { movieId?: string }) => {
  const movie = useSelector(selectMovieById(movieId));

  return {
    movie,
  };
};

export default useBookingDetailScreenHooks;
