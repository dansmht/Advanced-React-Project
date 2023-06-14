import { Counter } from "./components/Counter";
import classes from './index.scss';

export const App = () => {
  return (
    <div className={classes.App}>
      <Counter />
    </div>
  );
};
