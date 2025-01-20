import { call, put, takeEvery } from "redux-saga/effects";

import { fetchJson } from "@/lib/fetcher";
import {
  getUsersFail,
  getUsersFetch,
  getUsersSuccess,
} from "@/reducers/auth/reducer";

const fetchUsers = () => fetchJson("/users", { method: "GET" }).then(r => r);

export function* workerFetchUsers() {
  try {
    const users = yield call(fetchUsers);
    yield put(getUsersSuccess(users));
  } catch (error) {
    console.log(error);
    yield put(getUsersFail());
  }
}

export function* authSagas() {
  yield takeEvery(getUsersFetch().type, workerFetchUsers);
}
