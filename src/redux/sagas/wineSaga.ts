import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  call,
  cancel,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { RequestPayload } from "../../models";
import productApi from "../../api/productApi";
import {
  getRelatedProduct,
  getRelatedProductSuccess,
  getWine,
  getWineFalse,
  getWineSuccess,
} from "../silces/wineSlide";

function* fetchWineData(state: PayloadAction<string>): Generator<any> {
  try {
    const response: any = yield call(() => productApi.getWine(state.payload));
    if (response?._id) {
      yield put(getWineSuccess({ ...response, id: response._id }));
    } else {
      yield put(getWineFalse);
    }
  } catch (error) {
    yield put(getWineFalse);
  }
}

function* fetchRelatedData(): Generator<any> {
  try {
    const response: any = yield call(() =>
      productApi.getListProduct({ params: { limit: 10, page: 1 } })
    );
    if (response?.pageItems) {
      yield put(getRelatedProductSuccess(response.pageItems));
    } else {
      console.log("false fetchRelatedData ");
    }
  } catch (error) {
    console.log("false fetchRelatedData ");
  }
}

export default function* wineSaga(): Generator<any> {
  yield takeLatest(getWine.type, fetchWineData);
  yield takeLatest(getRelatedProduct.type, fetchRelatedData);
}
