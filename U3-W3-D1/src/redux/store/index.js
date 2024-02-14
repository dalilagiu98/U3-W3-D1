import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favorite";
import jobReducer from "../reducers/job";

const bigReducer = combineReducers({
  favorite: favoriteReducer,
  job: jobReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
