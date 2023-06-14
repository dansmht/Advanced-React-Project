import { useState } from "react";
import classes from './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className={classes.Button}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >+</button>
      <div>{count}</div>
    </div>
  );
};
