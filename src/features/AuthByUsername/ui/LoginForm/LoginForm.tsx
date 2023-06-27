import { FC, ReactNode } from "react";
import classNames from "classnames";
import classes from "./LoginForm.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";

interface LoginFormProps {
  className?: string;
  children?: ReactNode;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <div className={classNames(classes.LoginForm, className)}>
      <input type="text"/>
      <input type="text"/>
      <Button>
        {t("login")}
      </Button>
    </div>
  );
};
