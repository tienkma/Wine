import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductEntity } from "../../models";
import { RootState } from "../root/store";

export interface productState {
  isLoading: boolean;
  products: ProductEntity[] | null;
  isError: boolean;
  filter: Record<string, string>;
}

const initialState: productState = {
  isLoading: false,
  products: null,
  isError: false,
  filter: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getListProduct: (state, action) => {
      state.isLoading = true;
    },
    getListSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.isError = false;
    },
    getListFalse: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { getListProduct, getListSuccess, getListFalse } =
  productSlice.actions;

// Selectors
export const selectproductList = (state: RootState) => state.product.products;
export const selectproductLoading = (state: RootState) =>
  state.product.isLoading;
export const selectproductError = (state: RootState) => state.product.isError;
export const selectproductFilter = (state: RootState) => state.product.filter;

export default productSlice.reducer;
