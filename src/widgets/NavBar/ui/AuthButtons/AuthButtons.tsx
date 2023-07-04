import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Button } from "shared/ui";
import { LoginModal } from "features/AuthByUsername";
import { useActionCreators, useModal } from "shared/lib/hooks";
import { selectIsAuthenticated, userActions } from "entities/User";
import classes from "./AuthButtons.scss";

interface AuthButtonsProps {
  className?: string;
  children?: ReactNode;
}

export const AuthButtons: FC<AuthButtonsProps> = ({ className }) => {

  const { t } = useTranslation();

  const {
    isOpen: isLoginModalOpen,
    onClose: onLoginModalClose,
    onOpen: onLoginModalOpen,
  } = useModal();

  const actions = useActionCreators(userActions);

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const onLogout = () => {
    actions.logout();
  };

  return (
    <div className={classNames(classes.AuthButtons, className)}>

      {isAuthenticated ? (
        <Button onClick={onLogout}>
          {t("logout")}
        </Button>
      ) : (
        <Button onClick={onLoginModalOpen}>
          {t("login")}
        </Button>
      )}

      <LoginModal
        isOpen={isLoginModalOpen}
        title={t("login2")}
        onClose={onLoginModalClose}
      />
    </div>
  );
};
