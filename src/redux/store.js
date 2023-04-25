import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";
import { filtersReducer } from "./filtersSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
