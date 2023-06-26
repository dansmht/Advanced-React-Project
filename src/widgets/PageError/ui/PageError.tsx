import { FC } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Button } from "shared/ui";
import classes from "./PageError.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {

  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div
      data-testid="page-error"
      className={classNames(classes.PageError, className)}
    >
      <p>{t("errorMessage")}</p>
      <Button onClick={reloadPage}>
        {t("reloadPage")}
      </Button>
    </div>
  );
};
