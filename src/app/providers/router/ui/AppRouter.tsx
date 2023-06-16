import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "widgets";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import classes from "./AppRouter.scss";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <div className={classes.PageWrapper}>
              <Suspense fallback={<PageLoader />}>
                {element}
              </Suspense>
            </div>
          )}
        />
      ))}
    </Routes>
  );
};
