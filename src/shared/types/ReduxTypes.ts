/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionCreatorsMapObject, AsyncThunk } from "@reduxjs/toolkit";

export type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
    ? BoundAsyncThunk<Actions[key]>
    : Actions[key]
}

type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (
  ...args: Parameters<Thunk>
) => ReturnType<ReturnType<Thunk>>;

export type Status = "init" | "loading" | "error" | "success";
