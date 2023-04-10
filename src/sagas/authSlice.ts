import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface authState {
  isLogin: boolean;
  logging: boolean;
  currentUser?: {
    name: string;
    id: string;
  };
}

const initialState: authState = {
  isLogin: false,
  logging: false,
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{username: string, password: string}>) => {
      state.logging = true
    },
    loginSuccess: (state ) => {
      localStorage.setItem("tokens", "login success")

      state.logging = false
      state.isLogin = true
    },
    loginFail: (state, action) => {
      action.payload.navigate('/login')
      state.logging = false
      state.isLogin = false
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    logOut: (state) => {
      localStorage.removeItem('tokens')
      state.logging = false
      state.isLogin = false

    },
  },
});

export const { login, loginSuccess, loginFail, logOut } = authSlice.actions;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default authSlice.reducer;
