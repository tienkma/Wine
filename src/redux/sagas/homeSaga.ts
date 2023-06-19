import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  call,
  cancel,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import homeApi from "../../api/homeApi";
import {
  getListFalse,
  getListSuccess,
  getListProduct,
} from "../silces/homeSlide";

function* fetchHomeList(state: any): Generator<any> {
  try {
    const response: any = yield call(homeApi.getFeaturedProduct);
    if (response.pageItems) {
      yield put(getListSuccess(response.pageItems));
    } else {
      yield put(getListFalse);
    }
  } catch (error) {
    yield put(getListFalse);
  }
}

export default [takeLatest(getListProduct.type, fetchHomeList)];
