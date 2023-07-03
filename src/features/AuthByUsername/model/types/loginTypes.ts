import { Status } from "shared/types/ReduxTypes";

export interface LoginState {
  status: Status;
  errorMessage?: string;
}
