import { CounterState } from "entities/Counter";
import { UserState } from "entities/User";

export interface RootState {
  counter: CounterState;
  user: UserState;
}
