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
import notificationApi from "../../api/notificationApi";
import {
  getNotifications,
  getNotificationsFalse,
  getNotificationsSuccess,
} from "../silces/notificationSlide";

function* fetchNotificationList(
  state: PayloadAction<RequestPayload>
): Generator<any> {
  try {
    const response: any = yield call(() =>
      notificationApi.getListNotification(state.payload)
    );
    if (response.pageItems) {
      yield put(getNotificationsSuccess(response.pageItems));
    } else {
      yield put(getNotificationsFalse);
    }
  } catch (error) {
    yield put(getNotificationsFalse);
  }
}

export default function* NotificationSaga(): Generator<any> {
  yield takeLatest(getNotifications.type, fetchNotificationList);
}
