import { FC, MouseEventHandler, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Button, ButtonTheme, Portal } from "shared/ui";
import { EventCodes } from "shared/constants/eventCodes";
import classes from "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  title: string;
  className?: string;
  onClose: () => void;
  children?: ReactNode;
}

const CLOSE_DELAY = 100;

export const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  className,
  onClose,
  children,
}) => {

  const defaultModalClassName = classNames(classes.ModalOverlay, className);

  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const [modalClassName, setModalClassName] = useState(defaultModalClassName);
  const [isClosing, setIsClosing] = useState(false);

  const stopPropagation: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  const onModalClose = useCallback(() => {
    setIsClosing(true);
    closeTimerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, CLOSE_DELAY);
  }, [onClose]);

  // Animation on modal open
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setModalClassName(classNames(defaultModalClassName, classes.Open));
      });
    }

    return () => {
      setModalClassName(defaultModalClassName);
    };
  }, [defaultModalClassName, isOpen]);

  // Animation on modal close
  useEffect(() => {
    setModalClassName((prev) => classNames(prev, {
      [classes.Closing]: isClosing,
    }));
  }, [isClosing]);

  useEffect(() => {
    const onEscapeClose = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.defaultPrevented) return;
      if (e.key !== EventCodes.ESCAPE) return;

      e.preventDefault();
      e.stopPropagation();
      onModalClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", onEscapeClose);
    }

    return () => {
      clearTimeout(closeTimerRef.current);
      document.removeEventListener("keydown", onEscapeClose);
    };
  }, [isOpen, onModalClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className={modalClassName}
        onClick={onModalClose}
      >
        <div className={classes.ContentWrapper}>
          <div className={classes.Content} onClick={stopPropagation}>
            <header className={classes.ModalHeader}>
              <h3 className={classes.ModalTitle}>
                {title}
              </h3>

              <Button
                theme={ButtonTheme.FILLED}
                className={classes.CloseButton}
                onClick={onModalClose}
              >
                ESC
              </Button>
            </header>

            <div className={classes.ModalBody}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
