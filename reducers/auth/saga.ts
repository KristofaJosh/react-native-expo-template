import { router } from "expo-router";
import { call, put, takeEvery } from "redux-saga/effects";

import { fetchJson } from "@/lib/fetcher";
import { fakeUser } from "@/reducers/auth/constants";
import {
  getUsersFail,
  getUsersFetch,
  getUsersSuccess,
  loginUser,
  loginUserSuccess,
} from "@/reducers/auth/reducer";
import { setUserOnboarded } from "@/reducers/onboarding/reducer";

//TODO:  use facades

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// should be called handleFetchUsers
export function* workerFetchUsers() {
  try {
    const users = yield call(fetchJson, "/users", { method: "GET" });
    yield put(getUsersSuccess(users));
  } catch (_) {
    yield put(getUsersFail());
  }
}

export function* handleLoginUser() {
  yield delay(2000);
  yield put(setUserOnboarded());
  yield put(loginUserSuccess(fakeUser));
  router.replace("/(app)");
}

// should be called watchFetchUsers
export function* authSagas() {
  yield takeEvery(getUsersFetch.type, workerFetchUsers);
  yield takeEvery(loginUser.type, handleLoginUser);
}
