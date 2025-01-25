import { call, put, takeLatest, takeLeading } from "redux-saga/effects";

import { fetchArt } from "@/lib/fetcher";
import {
  getArtworks,
  getArtworksFailed,
  getArtworksSuccess,
  setRefreshing,
} from "@/reducers/explore/reducer";

export function* handleFetchArt() {
  try {
    const art = yield call(fetchArt, "/artworks?limit=50", {});
    yield put(getArtworksSuccess(art));
  } catch (error) {
    yield put(getArtworksFailed());
  }
}

// should be called watchFetchGalleryArt
export function* artGallerySagas() {
  yield takeLatest(getArtworks.type, handleFetchArt);
  yield takeLeading(setRefreshing.type, handleFetchArt);
}

/**
 * takeEvery - action dispatch, saga run (all triggers)
 * takeLatest - most recent saga is ran, prev run get aborted (last triggers)
 * takeLeading - only the first triggers, until the first one is done
 */