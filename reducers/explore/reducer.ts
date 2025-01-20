import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { compose, prop } from "ramda";

import { RootState } from "@/redux/root-reducers";

export const slice = "explore";

type ExploreState = {
  error: string | null;
  isLoading: boolean;
  pagination: Pagination;
  data: Artwork[];
};

const initialState: ExploreState = {
  error: null,
  isLoading: false,
  pagination: {
    total: 0,
    limit: 10,
    total_pages: 0,
    offset: 0,
    current_page: 0,
    next_url: "",
  },
  data: [],
};

const exploreReducer = createSlice({
  name: slice,
  initialState,
  reducers: {
    getArtworks(state) {
      state.isLoading = true;
      state.error = null;
    },
    getArtworksSuccess(state, action: PayloadAction<ArtAPIResponseArtworks>) {
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.isLoading = false;
      state.error = null;
    },
    getArtworksFailed(state) {
      state.isLoading = false;
      state.error = "Failed to fetch artworks";
    },
  },
});

// Selectors
export const selectExploreState = (state: RootState) => prop(slice, state);

export const getIsLoading = compose(prop("isLoading"), selectExploreState);

export const { getArtworks, getArtworksSuccess, getArtworksFailed } =
  exploreReducer.actions;

export default exploreReducer.reducer;
