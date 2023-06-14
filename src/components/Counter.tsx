import { useState } from "react";
import './Counter.css'

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >+</button>
      <div>{count}</div>
    </div>
  );
};
