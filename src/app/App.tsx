import { Link } from "react-router-dom";
import classNames from "classnames";
import { AppRouter } from "app/providers/router";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import classes from "./styles/index.scss";

export const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
      <div className={classNames(classes.App, classes[theme])}>

        <button onClick={toggleTheme}>TOGGLE</button>

        <Link to="/">Главная</Link>
        <Link to="/about">О сайте</Link>

        <AppRouter />
      </div>
  );
};
