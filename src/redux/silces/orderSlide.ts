import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderEntity } from "../../models";
import { RootState } from "../root/store";

export interface orderState {
  isLoading: boolean;
  orders: OrderEntity[] | null;
  isError: boolean;
}

const initialState: orderState = {
  isLoading: false,
  orders: null,
  isError: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getListOrder: (state, action) => {
      state.isLoading = true;
    },
    getOrdersSuccess: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload.pageItems;
      state.isError = false;
    },
    getOrdersFalse: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { getListOrder, getOrdersSuccess, getOrdersFalse } =
  orderSlice.actions;

// Selectors
export const selectOrderList = (state: RootState) => state.order.orders;
export const selectOrderLoading = (state: RootState) => state.order.isLoading;
export const selectOrderError = (state: RootState) => state.order.isError;

export default orderSlice.reducer;
