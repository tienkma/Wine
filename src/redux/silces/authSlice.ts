import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserEntity } from "../../models";
import { RootState } from "../root/store";
import { Storage } from "../../utils/local";

export interface authState {
  isLogin: boolean;
  user: UserEntity | null;
}

const initialState: authState = {
  isLogin: false,
  user: null,
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
      Storage.setLocal("user", JSON.stringify(action.payload.user));
      Storage.setLocal("token", JSON.stringify(action.payload.token));
    },
    logout: (state) => {
      state.isLogin = false;
      state.user = null;
      console.log("first");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout, setLogin } = authSlice.actions;
export const selectIsLogin = (state: RootState) => state.auth.isLogin;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default authSlice.reducer;
