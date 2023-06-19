import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  call,
  cancel,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import cartApi from "../../api/cartApi";
import {
  getListCart,
  getListCartSuccess,
  getListCartFalse,
} from "../silces/cartSlide";

function* fetchCartList(state: any): Generator<any> {
  try {
    const response: any = yield call(cartApi.getCarts);
    if (response.pageItems) {
      yield put(getListCartSuccess(response.pageItems));
    } else {
      yield put(getListCartFalse);
    }
  } catch (error) {
    yield put(getListCartFalse);
  }
}

export default function* cartSaga(): Generator<any> {
  yield all([takeLatest(getListCart.type, fetchCartList)]);
}
