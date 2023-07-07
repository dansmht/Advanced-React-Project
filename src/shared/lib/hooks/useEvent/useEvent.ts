import { useCallback, useLayoutEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useEvent = <Fn extends (...args: any[]) => any>(fn: Fn) => {
  const fnRef = useRef(fn);

  useLayoutEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  return useCallback(
    (...args: Parameters<Fn>) => {
      return fnRef.current(...args);
    }, []);
};
