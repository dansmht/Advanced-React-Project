import { FC, MouseEventHandler, useEffect } from "react";
import classNames from "classnames";
import { Button, ButtonTheme } from "shared/ui";
import { EventCodes } from "shared/constants/eventCodes";
import classes from "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  title: string;
  className?: string;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  className,
  onClose,
}) => {

  const onModalClose = () => {
    onClose && onClose();
    console.log("Close");
  };

  const stopPropagation: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const onEscapeClose = (e: KeyboardEvent) => {
      if (isOpen && e.code === EventCodes.ESCAPE) {
        onModalClose();
      }
    };

    document.addEventListener("keydown", onEscapeClose);

    return () => {
      document.removeEventListener("keydown", onEscapeClose);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={classNames(classes.ModalOverlay, {
        [classes.Open]: isOpen,
      }, className)}
      onClick={onModalClose}
    >
      <div className={classes.ContentWrapper}>
        <div className={classes.Content} onClick={stopPropagation}>
          <header className={classes.ModalHeader}>
            <h3>{title}</h3>

            <Button
              theme={ButtonTheme.FILLED}
              className={classes.CloseButton}
              onClick={onClose}
            >
              ESC
            </Button>
          </header>

          <div>1</div>
        </div>
      </div>
    </div>
  );
};
