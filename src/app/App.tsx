import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import classNames from "classnames";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

import classes from "./styles/index.scss";

export const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
      <div className={classNames(classes.App, classes[theme])}>

        <button onClick={toggleTheme}>TOGGLE</button>

        <Link to="/">Главная</Link>
        <Link to="/about">О сайте</Link>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/" element={<MainPage />} />
          </Routes>
        </Suspense>
      </div>
  );
};
