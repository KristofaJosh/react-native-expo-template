import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootReducer, { RootState } from "@/redux/root-reducers";

import rootSaga from "./root-sagas";

const logger = (store) => (next) => (action) => {
  console.log(">>> dispatching", action);
  const result = next(action);
  console.log(">>> next state", store.getState());
  return result;
};

const persistConfig = {
  key: "artify:root",
  storage: AsyncStorage,
  blacklist: ["explore"],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false })
      .concat(sagaMiddleware)
      // .concat(logger),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
// persistor.purge()

export type AppStore = typeof store;

export type AppDispatch = AppStore["dispatch"];
