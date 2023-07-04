import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "shared/api/api";
import { User } from "entities/User";

export const initializeUser = createAsyncThunk<User, never, { rejectValue: string }>(
  "user/initializeUser",
  (_, thunkAPI) => {
    try {
      return api.get("me").json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  });
