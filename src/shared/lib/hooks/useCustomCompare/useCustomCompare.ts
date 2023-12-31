import { useRef } from "react";
import { usePrevious } from "shared/lib/hooks";

export const useCustomCompare = <T>(
  value: T,
  areEqual: (previous: T, current: T) => boolean,
) => {
  const changeRef = useRef(0);
  const previousValue = usePrevious(value).current;

  if (changeRef.current === 0 || !areEqual(previousValue as T, value)) {
    changeRef.current++;
  }

  return changeRef.current;
};
