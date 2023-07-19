import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserEntity } from "../../models";
import { RootState } from "../root/store";
import { Storage } from "../../utils/local";

export interface authState {
  isLogin: boolean;
  user: UserEntity | null;
  token: string;
}

const initialState: authState = {
  isLogin: false,
  user: null,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isLogin = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      Storage.setLocal("user", JSON.stringify(action.payload.user));
      Storage.setLocal("token", JSON.stringify(action.payload.token));
    },
    logout: (state) => {
      state.isLogin = false;
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout, setLogin } = authSlice.actions;
export const selectIsLogin = (state: RootState) => state.auth.isLogin;
export const selectToken = (state: RootState) => state.auth.token;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default authSlice.reducer;
