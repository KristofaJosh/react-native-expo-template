import { call, put, takeEvery } from "redux-saga/effects";

import { fetchArt } from "@/lib/fetcher";
import { getArtworks, getArtworksFailed, getArtworksSuccess } from "@/reducers/explore/reducer";

const fetchArtWorks = () => fetchArt("/artworks?limit=10", {}).then((r) => r);

export function* workerFetchArt() {
  try {
    const art = yield call(fetchArtWorks);
    yield put(getArtworksSuccess(art));
  } catch (error) {
    yield put(getArtworksFailed());
  }
}

export function* artGallerySagas() {
  yield takeEvery(getArtworks().type, workerFetchArt);
}
