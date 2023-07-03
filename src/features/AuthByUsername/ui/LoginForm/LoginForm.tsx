import { FC, FormEvent, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Button, Input, InputGroup, Label } from "shared/ui";
import { useActionCreators, useInput } from "shared/lib/hooks";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import classes from "./LoginForm.scss";

interface LoginFormProps {
  className?: string;
  children?: ReactNode;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {

  const { t } = useTranslation();
  const actions = useActionCreators({ loginByUsername: loginByUsername });

  const [username, setUsername] = useInput();
  const [password, setPassword] = useInput();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    actions.loginByUsername({
      username,
      password,
    });
  };

  return (
    <form
      className={classNames(classes.LoginForm, className)}
      onSubmit={onSubmit}
    >
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
