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
  getListProduct,
  getListSuccess,
} from "../silces/productSlide";
import { RequestPayload } from "../../models";
import productApi from "../../api/productApi";

function* fetchProductList(
  state: PayloadAction<RequestPayload>
): Generator<any> {
  try {
    const response: any = yield call(() =>
      productApi.getListProduct(state.payload)
    );
    if (response.pageItems) {
      yield put(getListSuccess(response.pageItems));
    } else {
      yield put(getListFalse);
    }
  } catch (error) {
    yield put(getListFalse);
  }
}

export default function* productSaga(): Generator<any> {
  yield takeLatest(getListProduct.type, fetchProductList);
}
