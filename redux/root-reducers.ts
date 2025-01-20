import { combineReducers } from "redux";

import authReducer, { slice as authSlice } from "@/components/auth/reducer";
import onboardingReducer, {
  slice as onboardingSlice,
} from "@/components/onboarding/reducer";

const rootReducer = combineReducers({
  [onboardingSlice]: onboardingReducer,
  [authSlice]: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
