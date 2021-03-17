import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import api from "./middleware/api";
import loading from "./loading";
import navSettings from "./navSettings";
import messages from "./messages";

const rootReducer = combineReducers({
  loading,
  navSettings,
  messages,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), api],
});
export default store;
