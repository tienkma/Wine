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
  getListComment,
  getListCommentSuccess,
  getRelatedProduct,
  getRelatedProductSuccess,
  getWine,
  getWineFalse,
  getWineSuccess,
} from "../silces/wineSlide";

function* fetchWineData(state: PayloadAction<string>): Generator<any> {
  try {
    const reponseWine: any = yield call(() =>
      productApi.getWine(state.payload)
    );
    if (reponseWine?._id) {
      yield put(getWineSuccess({ ...reponseWine, id: reponseWine._id }));
    } else {
      yield put(getWineFalse());
    }
  } catch (error) {
    yield put(getWineFalse());
  }
}

function* fetchWineComment(
  state: PayloadAction<RequestPayload & { id: string }>
): Generator<any> {
  try {
    const { id, params } = state.payload;
    const reponseComment: any = yield call(() =>
      productApi.getCommentByIdWine(id, { params })
    );

    if (reponseComment?.pageItems) {
      yield put(
        getListCommentSuccess({ ...reponseComment, id: reponseComment._id })
      );
    } else {
      console.log("error get comments");
    }
  } catch (error) {
    console.log("error get comments");
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
  yield takeLatest(getListComment.type, fetchWineComment);
}
