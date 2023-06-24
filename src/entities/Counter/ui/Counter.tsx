import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui";
import { counterActions } from "entities/Counter";
import { selectCounterValue } from "entities/Counter/model/selectors";

export const Counter: FC = () => {
  const dispatch = useDispatch();

  const count = useSelector(selectCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid="counter">
      <p data-testid="counter-value">{count}</p>
      <Button data-testid="counter-increment-btn" onClick={increment}>
        +
      </Button>
      <Button data-testid="counter-decrement-btn" onClick={decrement}>
        -
      </Button>
    </div>
  );
};
