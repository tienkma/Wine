import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartEntity } from "../../models";
import { RootState } from "../root/store";
import { Storage } from "../../utils/local";

export interface cartState {
  isLoading: boolean;
  carts: CartEntity[] | null;
  isError: boolean;
}

const initialState: cartState = {
  isLoading: false,
  carts: Storage.getLocal("carts") || [],
  isError: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getListCart: (state, action) => {
      state.isLoading = true;
    },
    getListCartSuccess: (state, action) => {
      state.isLoading = false;
      state.carts = action.payload;
      state.isError = false;
    },
    getListCartFalse: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { getListCart, getListCartSuccess, getListCartFalse } =
  cartSlice.actions;

// Selectors
export const selectcartList = (state: RootState) => state.cart.carts;
export const selectcartLoading = (state: RootState) => state.cart.isLoading;
export const selectcartError = (state: RootState) => state.cart.isError;

export default cartSlice.reducer;
