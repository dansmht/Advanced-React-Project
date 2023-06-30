import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Button, Input, InputGroup, Label } from "shared/ui";
import { useInput } from "shared/lib/hooks";
import classes from "./LoginForm.scss";

interface LoginFormProps {
  className?: string;
  children?: ReactNode;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {

  const { t } = useTranslation();

  const [username, setUsername] = useInput();
  const [password, setPassword] = useInput();

  return (
    <form className={classNames(classes.LoginForm, className)}>
      <InputGroup>
        <Label>{t("username")}</Label>
        <Input
          variant="flushed"
          placeholder={t("typeUsername")}
          name="username"
          value={username}
          onChange={setUsername}
        />
      </InputGroup>

      <InputGroup>
        <Label>{t("password")}</Label>
        <Input
          variant="flushed"
          type="password"
          placeholder={t("typePassword")}
          name="password"
          value={password}
          onChange={setPassword}
        />
      </InputGroup>

      <Button type="submit">
        {t("login")}
      </Button>
    </form>
  );
};