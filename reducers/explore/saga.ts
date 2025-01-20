import { call, takeEvery } from "redux-saga/effects";

import { fetchArt } from "@/lib/fetcher";

const fetchArtWorks = () => fetchArt("/artworks?limit=10", {}).then((r) => r);

export function* workerFetchArt() {
  try {
    const art = yield call(fetchArtWorks);
    console.log(art);
  } catch (error) {
    console.log(error);
  }
}

export function* artGallerySagas() {
  yield takeEvery();
}
