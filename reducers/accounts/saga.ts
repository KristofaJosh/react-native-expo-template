import { router } from "expo-router";
import { all, call, put, takeEvery } from "redux-saga/effects";

import { resetAppAction } from "@/reducers/accounts/reducer";
import { resetUser } from "@/reducers/auth/reducer";
import { resetUserOnboarded } from "@/reducers/onboarding/reducer";

const gotoOnboarding = () => {
  router.push("/onboarding");
};

export function* workerResetAppState() {
  yield all([
    put(resetUser()),
    put(resetUserOnboarded()),
    call(gotoOnboarding),
  ]);
}

export function* accountSagas() {
  yield takeEvery(resetAppAction.type, workerResetAppState);
}
