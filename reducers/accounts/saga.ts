import { put, takeEvery } from "redux-saga/effects";

import { resetAuth } from "@/reducers/auth/reducer";
import { resetUserOnboarded } from "@/reducers/onboarding/reducer";

export function* workerResetAppState() {
  yield put(resetUserOnboarded());
  yield put(resetAuth());
}

export function* accountSagas() {
  console.log(resetAuth().type);
  yield takeEvery(resetAuth().type, workerResetAppState);
}
