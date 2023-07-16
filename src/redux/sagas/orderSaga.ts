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
import orderApi from "../../api/orderApi";
import {
  getListOrder,
  getOrdersFalse,
  getOrdersSuccess,
} from "../silces/orderSlide";

function* fetchOrderList(state: PayloadAction<RequestPayload>): Generator<any> {
  try {
    const response: any = yield call(() =>
      orderApi.getListOrder(state.payload)
    );
    if (response) {
      yield put(getOrdersSuccess(response));
    } else {
      yield put(getOrdersFalse());
    }
  } catch (error) {
    yield put(getOrdersFalse());
  }
}

export default function* orderSaga(): Generator<any> {
  yield takeLatest(getListOrder.type, fetchOrderList);
}
