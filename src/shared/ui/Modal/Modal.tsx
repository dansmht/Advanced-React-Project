import { FC, MouseEventHandler, ReactNode, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import { Button, ButtonTheme, Portal } from "shared/ui";
import { EventCodes } from "shared/constants/eventCodes";
import { contentVariants, overlayVariants, transition } from "shared/ui/Modal/constants/motion";
import classes from "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  title: string;
  className?: string;
  onClose: () => void;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  className,
  onClose,
  children,
}) => {

  const stopPropagation: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  const onModalClose = useCallback(() => {
    onClose();
  }, [onClose]);

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
      document.removeEventListener("keydown", onEscapeClose);
    };
  }, [isOpen, onModalClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          <motion.div
            className={classNames(classes.ModalOverlay, className)}
            onClick={onModalClose}
            initial={"initial"}
            animate={"animate"}
            exit={"initial"}
            transition={transition}
            variants={overlayVariants}
          >
            <motion.div
              className={classes.ContentWrapper}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              transition={transition}
              variants={contentVariants}
            >
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
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
};
