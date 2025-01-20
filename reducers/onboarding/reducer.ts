import { createSlice } from "@reduxjs/toolkit";
import { compose, prop } from "ramda";

import { RootState } from "@/redux/root-reducers";

export const slice = "onboarding";

const onboardingReducer = createSlice({
  name: slice,
  initialState: {
    complete: false,
  },
  reducers: {
    setUserOnboarded(state) {
      state.complete = true;
    },
    resetUserOnboarded(state) {
      state.complete = false;
    },
  },
});
console.log(onboardingReducer.actions.setUserOnboarded().type);

// Selectors
const selectOnboardingState = (state: RootState) => prop(slice, state);

export const selectHasOnboarded = compose(
  prop("complete"),
  selectOnboardingState,
);

export const { setUserOnboarded, resetUserOnboarded } =
  onboardingReducer.actions;

export default onboardingReducer.reducer;
