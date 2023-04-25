import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchFilteredUsers,
  fetchUsersByPage,
  toggleFollow,
} from "./operations";

const usersInitialState = {
  items: [],
  isLoading: false,
  error: null,
  userCount: 0,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersByPage.fulfilled, (state, action) => {
        const existingUsers = state.items?.map((user) => user.id);
        const users = action.payload.filter(
          (user) => !existingUsers.includes(user.id)
        );
        return {
          items:
            state.items?.length !== 0
              ? [...state.items, ...users]
              : action.payload,
          userCount: state.userCount,
          isLoading: false,
          error: null,
        };
      })
      .addCase(toggleFollow.fulfilled, (state, action) => {
        const index = state.items?.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items?.splice(index, 1, action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchFilteredUsers.fulfilled, (state, action) => {
        return {
          items: state.items,
          userCount: action.payload.length,
          isLoading: false,
          error: null,
        };
      })
      .addMatcher(
        isAnyOf(
          toggleFollow.pending,
          fetchUsersByPage.pending,
          fetchFilteredUsers.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          toggleFollow.rejected,
          fetchUsersByPage.rejected,
          fetchFilteredUsers.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const usersReducer = usersSlice.reducer;
