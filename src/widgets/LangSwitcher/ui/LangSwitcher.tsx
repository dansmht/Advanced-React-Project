import { FC } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Button } from "shared/ui";
import classes from './LangSwitcher.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <Button
      className={classNames(classes.LangSwitcher, className)}
      onClick={toggleLanguage}
    >
      {t('language')}
    </Button>
  );
};
