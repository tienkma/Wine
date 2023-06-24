import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductEntity } from "../../models";
import { RootState } from "../root/store";

export interface productState {
  isLoading: boolean;
  products: ProductEntity[] | null;
  isError: boolean;
  filter: Record<string, any>;
  sort: string;
  page: number;
}

const initialState: productState = {
  isLoading: false,
  products: null,
  isError: false,
  sort: "",
  filter: {
    search: "",
    maxPrice: 1000,
    winery: "all",
    rating: "all",
    price: 1000,
  },
  page: 1,
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
    getListFalse: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    changeFilter: (state, action) => {
      state.filter[action.payload.key] = action.payload.filter;
    },
    changeSort: (state, action) => {
      state.sort = action.payload;
    },
    clearFilter: (state) => {
      state.filter = initialState.filter;
    },
  },
});

export const {
  getListProduct,
  getListSuccess,
  getListFalse,
  changeFilter,
  changeSort,
  clearFilter,
  setPage,
} = productSlice.actions;

// Selectors
export const selectproductList = (state: RootState) => state.product.products;
export const selectproductLoading = (state: RootState) =>
  state.product.isLoading;
export const selectproductError = (state: RootState) => state.product.isError;
export const selectproductFilter = (state: RootState) => state.product.filter;
export const selectProductPage = (state: RootState) => state.product.page;

export default productSlice.reducer;
