import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentEntity, ProductEntity } from "../../models";
import { RootState } from "../root/store";

export interface wineState {
  isLoading: boolean;
  wineData: ProductEntity | null;
  relatedProduct: ProductEntity[] | null;
  isError: boolean;
  isLoadingRelated: boolean;
  comments: CommentEntity[] | null;
  isLoadComments: boolean;
}

const initialState: wineState = {
  isLoading: false,
  wineData: null,
  isError: false,
  relatedProduct: null,
  isLoadingRelated: false,
  comments: null,
  isLoadComments: false,
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
    getWineFalse: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    getRelatedProduct: (state) => {
      state.isLoadingRelated = true;
    },
    getRelatedProductSuccess: (state, action) => {
      state.isLoadingRelated = false;
      state.relatedProduct = action.payload;
    },
    getListComment: (state, action) => {
      state.isLoadComments = true;
    },
    getListCommentSuccess: (state, action) => {
      state.isLoadComments = false;
      state.comments = action.payload.pageItems;
    },
    addComment: (state, action) => {
      state.comments = [action.payload, ...(state.comments || [])];
    },
  },
});

export const {
  getWine,
  getWineSuccess,
  getWineFalse,
  getRelatedProduct,
  getRelatedProductSuccess,
  getListComment,
  getListCommentSuccess,
  addComment,
} = wineSlice.actions;

// Selectors
export const selectWineData = (state: RootState) => state.wine.wineData;
export const selectWineLoading = (state: RootState) => state.wine.isLoading;
export const selectWineError = (state: RootState) => state.wine.isError;
export const selectListComment = (state: RootState) => state.wine.comments;
export const selectLoadCommentLoad = (state: RootState) =>
  state.wine.isLoadComments;
export const selectRelatedProduct = (state: RootState) =>
  state.wine.relatedProduct;
export const selectRelatedLoading = (state: RootState) =>
  state.wine.isLoadingRelated;

export default wineSlice.reducer;
