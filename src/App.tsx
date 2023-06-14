import { lazy, Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
// import { AboutPage } from "./pages/AboutPage/AboutPage";
// import { MainPage } from "./pages/MainPage/MainPage";
import classes from "./styles/index.scss";
import classNames from "classnames";
import { ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

const AboutPageAsync = lazy(() => import("./pages/AboutPage/AboutPage.lazy"));
const MainPageAsync = lazy(() => import("./pages/MainPage/MainPage.lazy"));



export const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
      <div className={classNames(classes.App, classes[theme])}>

        <button onClick={toggleTheme}>TOGGLE</button>

        <Link to="/">Главная</Link>
        <Link to="/about">О сайте</Link>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path="/about" element={<AboutPageAsync />} />
              <Route path="/" element={<MainPageAsync />} />
          </Routes>
        </Suspense>
      </div>
  );
};
