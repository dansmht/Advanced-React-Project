import { useEffect, useState } from "react";
import classNames from "classnames";

type UseModalClassnameOptions = {
  isOpen: boolean;
  defaultClassName: string;
  openClassName: string;
  closingClassName: string;
}

export const useModalClassname = ({
  isOpen,
  defaultClassName,
  openClassName,
  closingClassName,
}: UseModalClassnameOptions) => {
  const [containerClassName, setContainerClassName] = useState(defaultClassName);

  // Add classes for animations
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setContainerClassName(classNames(defaultClassName, openClassName));
        });
      });
    } else {
      setContainerClassName(classNames(defaultClassName, openClassName, closingClassName));
    }
  }, [closingClassName, defaultClassName, isOpen, openClassName]);

  return containerClassName;
};
