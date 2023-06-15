import { Suspense } from "react";
import classNames from "classnames";
import { AppRouter } from "app/providers/router";
import { NavBar, SideBar } from "widgets";
import { useTheme } from "app/providers/ThemeProvider";
import classes from "./styles/index.scss";

export const App = () => {

  const { theme } = useTheme();

  return (
    <Suspense fallback={<div>...</div>}>
      <div className={classNames(classes.App, classes[theme])}>
        <NavBar />

        <div className={classes.Content}>
          <SideBar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};
