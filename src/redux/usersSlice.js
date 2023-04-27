import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchFilteredUsersByPage,
  toggleFollow,
  getUserById,
  getUserWithMostFollowers,
  getUserWithMostTweets,
  getAllUsers,
} from "./operations";

const usersInitialState = {
  items: [],
  selectedUser: null,
  userWithMostFollowers: null,
  userWithMostTweets: null,
  allUsers: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredUsersByPage.fulfilled, (state, action) => {
        const existingUsers = state.items?.map((user) => user.id);
        const users = action.payload.filter(
          (user) => !existingUsers.includes(user.id)
        );
        return {
          ...state,
          items:
            state.items?.length !== 0
              ? [...state.items, ...users]
              : action.payload,
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
      .addCase(getUserById.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserWithMostTweets.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          userWithMostTweets: action.payload,
        };
      })
      .addCase(getUserWithMostFollowers.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          userWithMostFollowers: action.payload,
        };
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allUsers = action.payload;
      })
      .addMatcher(
        isAnyOf(
          toggleFollow.pending,
          fetchFilteredUsersByPage.pending,
          getUserById.pending,
          getUserWithMostFollowers.pending,
          getUserWithMostTweets.pending,
          getAllUsers.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          toggleFollow.rejected,
          fetchFilteredUsersByPage.rejected,
          getUserById.rejected,
          getUserWithMostFollowers.rejected,
          getUserWithMostTweets.rejected,
          getAllUsers.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const usersReducer = usersSlice.reducer;
