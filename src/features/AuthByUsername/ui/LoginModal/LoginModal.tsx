import { FC, ReactNode } from "react";
import classNames from "classnames";
import { ModalWithHeader } from "shared/ui";
import { LoginForm } from "../LoginForm/LoginForm";
import classes from "./LoginModal.scss";

interface LoginModalProps {
  isOpen: boolean;
  title: string;
  onClose: VoidFunction;
  className?: string;
  children?: ReactNode;
}

export const LoginModal: FC<LoginModalProps> = ({
  isOpen,
  title,
  onClose,
  className,
}) => {

  return (
    <ModalWithHeader
      isOpen={isOpen}
      title={title}
      className={classNames(classes.LoginModal, className)}
      onClose={onClose}
    >
      <LoginForm onClose={onClose} />
    </ModalWithHeader>
  );
};
