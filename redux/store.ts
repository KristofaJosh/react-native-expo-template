import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootReducer, { RootState } from "@/redux/root-reducers";

import rootSaga from "./root-sagas";

const persistConfig = {
  key: "artify:root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      sagaMiddleware,
    ),
});

console.log(store.getState());

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppStore = typeof store;

export type AppDispatch = AppStore["dispatch"];
