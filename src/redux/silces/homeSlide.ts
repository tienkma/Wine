import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductEntity } from "../../models";
import { RootState } from "../root/store";

export interface homeState {
  isLoading: boolean;
  featuredProducts: ProductEntity[] | null;
  isError: boolean;
  activeNav: boolean;
}

const initialState: homeState = {
  isLoading: false,
  featuredProducts: null,
  isError: false,
  activeNav: false,
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
    getListFalse: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    changeActiveNav: (state, action) => {
      state.activeNav = action.payload;
    },
  },
});

export const { getListProduct, getListSuccess, getListFalse, changeActiveNav } =
  homeSlice.actions;

// Selectors
export const selectHomeList = (state: RootState) => state.home.featuredProducts;
export const selectHomeLoading = (state: RootState) => state.home.isLoading;
export const selectHomeError = (state: RootState) => state.home.isError;
export const selectHomeActiveNav = (state: RootState) => state.home.activeNav;

export default homeSlice.reducer;
