import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "shared/api/api";
import { userActions } from "entities/User/model/slice/userSlice";
import { LocalStorageKeys } from "shared/constants/localStorageKeys";
import { User } from "entities/User";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  "login/loginByUsername",
  async (userCredentials, thunkAPI) => {

    try {
      const { user, token } = await api
        .post("login", { json: userCredentials })
        .json() as { user: User, token: string };

      thunkAPI.dispatch(userActions.setAuthData(user));
      localStorage.setItem(LocalStorageKeys.TOKEN, token);

      return user;
    } catch (err) {
      console.log("WTRFFFF");
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
