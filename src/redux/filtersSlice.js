import { createSlice } from "@reduxjs/toolkit";
import { filterOptions } from "./contants";

const filtersInitialState = filterOptions[0];

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
