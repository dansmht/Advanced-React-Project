import { FC } from "react";
import classNames from "classnames";
import { Button, ButtonTheme, Modal } from "shared/ui";
import { ModalProps } from "../Modal/Modal";
import classes from "./ModalWithHeader.scss";

interface ModalWithHeaderProps extends ModalProps {
  title: string;
}

export const ModalWithHeader: FC<ModalWithHeaderProps> = ({
  title,
  isOpen,
  onClose,
  className,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      className={classNames(classes.Content, className)}
      onClose={onClose}
    >
      <header className={classes.Header}>
        <h3 className={classes.Title}>
          {title}
        </h3>

        <Button
          data-testid="modal-esc-btn"
          theme={ButtonTheme.FILLED}
          className={classes.CloseButton}
          onClick={onClose}
        >
          ESC
        </Button>
      </header>

      <div className={classes.Body}>
        {children}
      </div>
    </Modal>
  );
};
