import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductEntity } from "../../models";
import { RootState } from "../root/store";

export interface productState {
  isLoading: boolean;
  products: ProductEntity[] | null;
  isError: boolean;
  filter: Record<string, any>;
  sort: string;
  sortBy: "price" | "name";
  page: number;
  totalPage: number;
}

const initialState: productState = {
  isLoading: false,
  products: null,
  isError: false,
  sort: "asc",
  sortBy: "price",
  filter: {
    wine: "",
    winery: "all",
    rating: "all",
    price: 1000,
  },
  page: 1,
  totalPage: 1,
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
      state.products = action.payload.pageItems;
      state.totalPage = action.payload.pageInfo?.totalPage || 1;
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
      window.scrollTo(0, 0);
      state.filter[action.payload.key] = action.payload.filter;
    },
    changeSort: (state, action) => {
      state.sort = action.payload.sort;
      state.sortBy = action.payload.sortBy;
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
export const selectproductSort = (state: RootState) => state.product.sort;
export const selectproductSortBy = (state: RootState) => state.product.sortBy;
export const selectproductFilter = (state: RootState) => state.product.filter;
export const selectProductPage = (state: RootState) => state.product.page;
export const selectProductTotalPage = (state: RootState) =>
  state.product.totalPage;

export default productSlice.reducer;
