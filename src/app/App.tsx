import classNames from "classnames";
import { NavBar } from "widgets/NavBar";
import { AppRouter } from "app/providers/router";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import classes from "./styles/index.scss";

export const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
      <div className={classNames(classes.App, classes[theme])}>

        <NavBar />

        <AppRouter />

        <button onClick={toggleTheme}>TOGGLE</button>

      </div>
  );
};
