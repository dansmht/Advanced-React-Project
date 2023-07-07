import { FC, ReactNode } from "react";
import classNames from "classnames";
import { Portal } from "shared/ui";
import { useKeyDown, useModalClassname, useMount } from "shared/lib/hooks";
import { EventCodes } from "shared/constants/eventCodes";
import classes from "./Modal.scss";

export interface ModalProps {
  isOpen: boolean;
  className?: string;
  onClose: VoidFunction;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  className,
  onClose,
  children,
}) => {
  const isMounted = useMount(isOpen);

  const containerClassName = useModalClassname({
    isOpen,
    defaultClassName: classes.Container,
    openClassName: classes.Open,
    closingClassName: classes.Closing,
  });

  useKeyDown(EventCodes.ESCAPE, onClose, {
    condition: isOpen,
  });

  if (!isMounted) return null;

  return (
    <Portal>
      <div
        data-testid="modal-container"
        className={containerClassName}
        role="dialog"
      >
        <div className={classes.Overlay} onClick={onClose}/>

        <div className={classNames(classes.Content, className)}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
