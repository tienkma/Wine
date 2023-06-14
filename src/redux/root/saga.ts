import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import homeSage from "../sagas/homeSaga";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* rootSagas() {
  yield all([homeSage()]);
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

export default rootSagas;
