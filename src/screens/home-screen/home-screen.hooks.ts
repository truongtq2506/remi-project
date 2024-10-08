import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchMoviesRequest, resetMoviesState } from '@/store/slices';
import { useAppDispatch } from '@/store/store';
import { selectMoviesz } from '@/store/selectors';

const useHomeScreenHooks = () => {
  const dispatch = useAppDispatch();
  const {
    movies,
    isLoading,
    isRefreshing,
    pageCurrent,
    hasMore,
    isLoadingMore,
  } = useSelector(selectMoviesz);

  // Fetch movies on mount
  useEffect(() => {
    dispatch(fetchMoviesRequest({ pageCurrent: 0, isRefreshing: false }));
  }, [dispatch]);

  // Handle pull to refresh
  const refresh = useCallback(() => {
    dispatch(resetMoviesState());
    dispatch(fetchMoviesRequest({ pageCurrent: 0, isRefreshing: true }));
  }, [dispatch]);
  // Handle load more
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) {
      return;
    }
    dispatch(fetchMoviesRequest({ pageCurrent, isRefreshing: false }));
  }, [dispatch, hasMore, isLoading, pageCurrent]);

  return {
    movies,
    isLoadingMore,
    isRefreshing,
    refresh,
    loadMore,
  };
};

export default useHomeScreenHooks;
