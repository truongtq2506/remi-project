import { useCallback, useEffect, useRef, useState } from 'react';

type SetSafeStateParamType<T> = T | ((value: T) => T);
export const useSafeState = <T>(
  initState: T,
): [T, (value: SetSafeStateParamType<T>) => void] => {
  const [value, setValue] = useState<T>(initState);
  const isMount = useRef<boolean>(true);
  const setSafeState = useCallback((nextValue: SetSafeStateParamType<T>) => {
    if (isMount.current) {
      setValue(nextValue);
    }
  }, []);
  useEffect(() => {
    isMount.current = true;
    return () => {
      isMount.current = false;
    };
  }, []);
  return [value, setSafeState];
};

export const useMutationValue = <T>(
  result: Partial<{
    data: T;
    isUninitialized: boolean;
    isSuccess: boolean;
  }>,
  initValue?: T,
) => {
  const lastValue = useRef<T | undefined>(initValue);
  const { data, isUninitialized, isSuccess } = result;
  if (isUninitialized) {
    lastValue.current = initValue;
  } else if (isSuccess) {
    lastValue.current = data;
  }
  return lastValue.current;
};

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
