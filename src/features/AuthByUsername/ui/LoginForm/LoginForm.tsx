import { FC, FormEvent } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button, Input, InputGroup, Label } from "shared/ui";
import { useActionCreators, useInput } from "shared/lib/hooks";
import { selectLoginStatus } from "features/AuthByUsername";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import classes from "./LoginForm.scss";

interface LoginFormProps {
  onClose: VoidFunction;
}

export const LoginForm: FC<LoginFormProps> = ({ onClose }) => {

  const { t } = useTranslation();
  const actions = useActionCreators({ loginByUsername: loginByUsername });

  const loginStatus = useSelector(selectLoginStatus);

  const [username, setUsername] = useInput();
  const [password, setPassword] = useInput();

  const isLoginDisabled = loginStatus === "loading";

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    actions.loginByUsername({
      username,
      password,
    })
      .unwrap()
      .then(onClose)
      .catch(console.error);
  };

  return (
    <form
      className={classes.LoginForm}
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

      <Button type="submit" disabled={isLoginDisabled}>
        {t("login")}
      </Button>
    </form>
  );
};
