import { FC } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Button } from "shared/ui";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      data-testid="lang-switcher"
      className={classNames(className)}
      onClick={toggleLanguage}
    >
      {t("language")}
    </Button>
  );
};
