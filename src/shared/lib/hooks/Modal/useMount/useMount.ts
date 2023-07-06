import { useEffect, useState } from "react";

const ANIMATION_TIME = 300;

export const useMount = (isOpen: boolean) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen && !isMounted) {
      setIsMounted(true);
    } else if (!isOpen && isMounted) {
      setTimeout(() => {
        setIsMounted(false);
      }, ANIMATION_TIME);
    }
  }, [isMounted, isOpen]);

  return isMounted;
};
