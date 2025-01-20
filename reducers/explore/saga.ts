import { call, put, takeEvery } from "redux-saga/effects";

import { fetchArt } from "@/lib/fetcher";
import { getUsersFail, getUsersSuccess } from "@/reducers/auth/reducer";
import { getArtworks } from "@/reducers/explore/reducer";

const fetchArtWorks = () => fetchArt("/artworks?limit=10", {}).then((r) => r);

export function* workerFetchArt() {
  try {
    const art = yield call(fetchArtWorks);
    yield put(getUsersSuccess(art));
  } catch (error) {
    yield put(getUsersFail());
  }
}

export function* artGallerySagas() {
  yield takeEvery(getArtworks().type, workerFetchArt);
}
