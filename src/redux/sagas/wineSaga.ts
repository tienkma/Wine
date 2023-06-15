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
import { getWine, getWineFalse, getWineSuccess } from "../silces/wineSlide";

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

export default function* wineSaga(): Generator<any> {
  yield takeLatest(getWine.type, fetchWineData);
}
