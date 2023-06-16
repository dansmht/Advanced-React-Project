import { FC } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import classes from "./NotFoundPage.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <div className={classNames(classes.NotFoundPage, className)}>
      {t("pageNotFound")}
    </div>
  );
};
