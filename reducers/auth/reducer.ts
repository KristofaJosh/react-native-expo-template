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
      state.lastLogin = new Date().toLocaleString();
      state.session = {
        id: 5424234234,
        username: action.payload.username,
        email: "some@mail.com",
        name: "Ervin Howell",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618",
          },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains",
        },
      };
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
  logoutUser,
  resetUser,
  getUsersFail,
  getUsersSuccess,
  getUsersFetch,
} = authReducer.actions;

export default authReducer.reducer;
