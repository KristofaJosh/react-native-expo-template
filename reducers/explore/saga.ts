import { call, put, takeLatest, takeLeading } from "redux-saga/effects";

import { fetchArt } from "@/lib/fetcher";
import {
  getArtworks,
  getArtworksFailed,
  getArtworksSuccess,
  setRefreshing,
} from "@/reducers/explore/reducer";

export function* workerFetchArt() {
  try {
    const art = yield call(fetchArt, "/artworks?limit=10", {});
    yield put(getArtworksSuccess(art));
  } catch (error) {
    yield put(getArtworksFailed());
  }
}

export function* artGallerySagas() {
  yield takeLatest(getArtworks.type, workerFetchArt);
  yield takeLeading(setRefreshing.type, workerFetchArt);
}
