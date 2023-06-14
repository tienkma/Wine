import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductEntity } from "../../models";
import { RootState } from "../root/store";

export interface homeState {
  isLoading: boolean;
  featuredProducts: ProductEntity[] | null;
  isError: boolean;
}

const initialState: homeState = {
  isLoading: false,
  featuredProducts: null,
  isError: false,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getListProduct: (state, action) => {
      state.isLoading = true;
    },
    getListSuccess: (state, action) => {
      state.isLoading = false;
      state.featuredProducts = action.payload;
      state.isError = false;
    },
    getListFalse: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { getListProduct, getListSuccess, getListFalse } =
  homeSlice.actions;

// Selectors
export const selectHomeList = (state: RootState) => state.home.featuredProducts;
export const selectHomeLoading = (state: RootState) => state.home.isLoading;
export const selectHomeError = (state: RootState) => state.home.isError;

export default homeSlice.reducer;
