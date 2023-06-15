import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductEntity } from "../../models";
import { RootState } from "../root/store";

export interface wineState {
  isLoading: boolean;
  wineData: ProductEntity | null;
  isError: boolean;
}

const initialState: wineState = {
  isLoading: false,
  wineData: null,
  isError: false,
};

export const wineSlice = createSlice({
  name: "wine",
  initialState,
  reducers: {
    getWine: (state, action) => {
      state.isLoading = true;
    },
    getWineSuccess: (state, action) => {
      state.isLoading = false;
      state.wineData = action.payload;
      state.isError = false;
    },
    getWineFalse: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { getWine, getWineSuccess, getWineFalse } = wineSlice.actions;

// Selectors
export const selectWineData = (state: RootState) => state.wine.wineData;
export const selectWineLoading = (state: RootState) => state.wine.isLoading;
export const selectWineError = (state: RootState) => state.wine.isError;

export default wineSlice.reducer;
