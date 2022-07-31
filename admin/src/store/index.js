import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./states/authState";

export const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  middleware: [saga],
});

export default store;
