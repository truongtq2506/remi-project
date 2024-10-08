import { useCallback, useEffect, useRef, useState } from 'react'

type SetSafeStateParamType<T> = T | ((value: T) => T)
export const useSafeState = <T>(initState: T): [T, (value: SetSafeStateParamType<T>) => void] => {
  const [value, setValue] = useState<T>(initState)
  const isMount = useRef<boolean>(true)
  const setSafeState = useCallback((nextValue: SetSafeStateParamType<T>) => {
    if (isMount.current) {
      setValue(nextValue)
    }
  }, [])
  useEffect(() => {
    isMount.current = true
    return () => {
      isMount.current = false
    }
  }, [])
  return [value, setSafeState]
}
