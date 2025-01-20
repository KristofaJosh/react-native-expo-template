import { call, put, takeEvery } from "redux-saga/effects";

import { fetchJson } from "@/lib/fetcher";
import {
  getUsersFail,
  getUsersFetch,
  getUsersSuccess,
} from "@/reducers/auth/reducer";

export function* workerFetchUsers() {
  try {
    const users = yield call(fetchJson, "/users", { method: "GET" });
    yield put(getUsersSuccess(users));
  } catch (error) {
    yield put(getUsersFail());
  }
}

export function* authSagas() {
  yield takeEvery(getUsersFetch.type, workerFetchUsers);
}
