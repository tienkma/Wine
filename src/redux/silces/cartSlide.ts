import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartEntity } from "../../models";
import { RootState } from "../root/store";
import { Storage } from "../../utils/local";
import { Toasts } from "../../utils/notification";
import { isArray } from "lodash";

export interface cartState {
  carts: CartEntity[] | [];
}

const initialState: cartState = {
  carts: Storage.getLocal("carts") || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      try {
        const newCart = action.payload;
        const cart = state.carts?.find(
          (item) => item._id === action.payload.id
        );
        if (!cart) {
          state.carts = state.carts.concat({
            ...action.payload,
            subtotal: action.payload.quantity * +action.payload.price,
          });
          return;
        }
        state.carts =
          state.carts?.map((item) => {
            if (item._id === cart._id) {
              const newQuantity = newCart.quantity + item.quantity;

              return {
                ...item,
                subtotal: action.payload.quantity * +action.payload.price,
                quantity:
                  newQuantity > +cart.available
                    ? item.quantity
                    : newQuantity < 1
                    ? item.quantity
                    : newQuantity,
              };
            }
            return item;
          }) || [];
      } finally {
        Toasts.success("Product added to cart successfully");
      }
    },
    clearCart: (state) => {
      state.carts = [];
    },
    removeItem: (state, action) => {
      if (isArray(action.payload)) {
        const listIdItemRemove: string[] = action.payload;
        state.carts =
          state.carts.filter((cart) => !listIdItemRemove.includes(cart._id)) ||
          [];
      } else {
        state.carts =
          state.carts.filter((cart) => cart._id != action.payload) || [];
      }
    },
    changeQuantityCart: (state, action) => {
      const { id, count } = action.payload;
      state.carts =
        state.carts?.map((cart) => {
          if (cart._id === id) {
            const quantity = cart.quantity;
            const newQuantity =
              count > +cart.available ? quantity : count < 1 ? quantity : count;

            return {
              ...cart,
              subtotal: newQuantity * +cart.price,
              quantity: newQuantity,
            };
          }
          return cart;
        }) || [];
    },
  },
});

export const { addCart, clearCart, removeItem, changeQuantityCart } =
  cartSlice.actions;

// Selectors
export const selectcartList = (state: RootState) => state.cart.carts;

export default cartSlice.reducer;
