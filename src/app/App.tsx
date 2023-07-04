import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { AppRouter, useTheme } from "app/providers";
import { NavBar, SideBar } from "widgets";
import { Loader } from "shared/ui";
import { useActionCreators } from "shared/lib/hooks";
import { initializeUser, selectUserStatus } from "entities/User";
import classes from "./App.scss";

export const App = () => {

  useTheme();
  const actions = useActionCreators({ initializeUser });

  const userStatus = useSelector(selectUserStatus);

  useEffect(() => {
    console.log("useEffect actions initializeUser");
    actions.initializeUser();
  }, [actions]);

  return (
    <Suspense fallback={<Loader />}>
      <div className={classNames(classes.App)}>
        <NavBar />

        <div className={classes.Content}>
          <SideBar />
          {userStatus === "initialized" && <AppRouter />}
        </div>
      </div>
    </Suspense>
  );
};
