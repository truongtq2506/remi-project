import { useRef, useEffect, useCallback, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

export const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
};

export const useLayoutHeight = () => {
  const [height, setHeight] = useState<number>(0);
  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { height: layoutHeight } = event.nativeEvent.layout;
    setHeight(layoutHeight);
  }, []);
  return { height, onLayout };
};
