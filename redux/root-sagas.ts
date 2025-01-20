import { all } from "redux-saga/effects";

import { accountSagas } from "@/reducers/accounts/saga";
import { authSagas } from "@/reducers/auth/saga";
import { artGallerySagas } from "@/reducers/explore/saga";

export default function* rootSaga() {
  yield all([accountSagas(), authSagas(), artGallerySagas()]);
}
