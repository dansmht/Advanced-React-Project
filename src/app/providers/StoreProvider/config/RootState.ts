import { CounterState } from "entities/Counter";
import { UserState } from "entities/User";
import { LoginState } from "features/AuthByUsername";

export interface RootState {
  counter: CounterState;
  user: UserState;
  login: LoginState;
}
