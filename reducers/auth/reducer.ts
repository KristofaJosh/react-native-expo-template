import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { compose, pipe, prop } from "ramda";

import { RootState } from "@/redux/root-reducers";

export const slice = "auth";

type AuthInput = { username: string; password: string };

type AuthState = {
  lastLogin: null | string;
  session: User | null;
  isLoading: boolean;
  error: null | string;
  users: User[];
};

export const initialState: AuthState = {
  lastLogin: null,
  session: null,
  isLoading: false,
  error: null,
  users: [],
};

const authReducer = createSlice({
  name: slice,
  initialState,
  reducers: {
    getUsersSuccess(state, action: PayloadAction<User[]>) {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    },
    getUsersFetch(state) {
      state.isLoading = true;
    },
    getUsersFail(state) {
      // typically we use actual error here
      state.isLoading = false;
      state.error = "Failed to fetch users";
    },
    logoutUser(state) {
      state.session = null;
      state.error = null;
      state.users = [];
    },
    resetUser() {
      return initialState;
    },
    loginUser(state, action: PayloadAction<AuthInput>) {
      state.isLoading = true;
      state.error = null;
      state.session = { username: action.payload.username } as User;
    },
    loginUserSuccess(state, action: PayloadAction<User>) {
      state.lastLogin = new Date().toLocaleString();
      state.session = {...action.payload, ...state.session};
      state.isLoading = false
    },
  },
});

// Selectors
export const selectAuthState = (state: RootState) => prop(slice, state);

export const getActiveSession = pipe(selectAuthState, prop("session"));

export const getAuthIsLoading = compose(prop("isLoading"), selectAuthState);

export const getLastLogin = compose(prop("lastLogin"), selectAuthState);

export const {
  loginUser,
  loginUserSuccess,
  logoutUser,
  resetUser,
  getUsersFail,
  getUsersSuccess,
  getUsersFetch,
} = authReducer.actions;

export default authReducer.reducer;
