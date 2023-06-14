import { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
// import { AboutPage } from "./pages/AboutPage/AboutPage";
// import { MainPage } from "./pages/MainPage/MainPage";
import classes from './index.scss';

const AboutPageAsync = lazy(() => import('./pages/AboutPage/AboutPage.lazy'))
const MainPageAsync = lazy(() => import('./pages/MainPage/MainPage.lazy'))

export const App = () => {
  return (
      <div className={classes.App}>
        <Link to='/'>Главная</Link>
        <Link to='/about'>О сайте</Link>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path='/about' element={<AboutPageAsync />} />
              <Route path='/' element={<MainPageAsync />} />
          </Routes>
        </Suspense>
      </div>
  );
};
