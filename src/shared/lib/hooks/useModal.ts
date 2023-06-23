import { useCallback, useState } from "react";

export const useModal = (initialIsOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  
  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};
