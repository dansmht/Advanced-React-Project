import { useEffect, useRef } from "react";

export const usePrevious = <T>(value: T) => {
  const prevValue = useRef<T | null>(value);

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return prevValue;
};
