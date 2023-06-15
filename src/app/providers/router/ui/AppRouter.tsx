import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import classes from './AppRouter.scss';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className={classes.PageWrapper}>
                {element}
              </div>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
