import { combineReducers } from "redux";

import authReducer, { slice as authSlice } from "@/reducers/auth/reducer";
import exploreReducer, { slice as exploreSlice } from "@/reducers/explore/reducer";
import onboardingReducer, {
  slice as onboardingSlice,
} from "@/reducers/onboarding/reducer";

const rootReducer = combineReducers({
  [onboardingSlice]: onboardingReducer,
  [authSlice]: authReducer,
  [exploreSlice]: exploreReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
