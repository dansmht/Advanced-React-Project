import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Button, Input } from "shared/ui";
import classes from "./LoginForm.scss";

interface LoginFormProps {
  className?: string;
  children?: ReactNode;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <form className={classNames(classes.LoginForm, className)}>
      <Input placeholder="Username" variant="unstyled" />
      <Input placeholder="Password" variant="flushed" leftAdornment={<div>Q</div>} rightAdornment={<div>QWE</div>} />
      <Input placeholder="Password 2" variant="filled" />
      <Input placeholder="Password 3" variant="outline" />
      <Button>
        {t("login")}
      </Button>
    </form>
  );
};
