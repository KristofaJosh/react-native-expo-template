import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { compose, pipe, prop } from "ramda";

import { RootState } from "@/redux/root-reducers";

export const slice = "auth";

type AuthInput = { username: string; password: string };

type AuthState = {
  lastLogin: null | string;
  session: User | null;
  isLoading: boolean;
};

export const initialState: AuthState = {
  lastLogin: null,
  session: null,
  isLoading: false,
};

const authReducer = createSlice({
  name: slice,
  initialState,
  reducers: {
    registerUser(state, action: PayloadAction<AuthInput>) {
      state.session = action as any;
    },
    loginUser(state, action: PayloadAction<AuthInput>) {
      state.session = action as any;
    },
  },
});

// Selectors
export const selectAuthState = (state: RootState) => prop(slice, state);

export const getActiveSession = pipe(selectAuthState, prop("session"));

export const getAuthIsLoading = compose(prop("isLoading"), selectAuthState);

export const getLastLogin = compose(prop("lastLogin"), selectAuthState);

export const { registerUser, loginUser } = authReducer.actions;

export default authReducer.reducer;
