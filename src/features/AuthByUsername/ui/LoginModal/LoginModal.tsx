import { FC, ReactNode } from "react";
import classNames from "classnames";
import { Modal } from "shared/ui";
import { LoginForm } from "../LoginForm/LoginForm";
import classes from "./LoginModal.scss";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children?: ReactNode;
}

export const LoginModal: FC<LoginModalProps> = ({
  isOpen,
  onClose,
  className,
}) => {

  return (
    <Modal
      isOpen={isOpen}
      className={classNames(classes.LoginModal, className)}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
};
