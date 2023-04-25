import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./contants";

const filtersInitialState = statusFilters.all;

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilterValue(state, action) {
      return action.payload;
    },
  },
});

export const { setFilterValue } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
