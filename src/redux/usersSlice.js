import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchFilteredUsers,
  fetchUsersByPage,
  toggleFollow,
  getUserById,
  getUserWithMostFollowers,
  getUserWithMostTweets,
  getAllUsers,
} from "./operations";

const usersInitialState = {
  items: [],
  isLoading: false,
  error: null,
  userCount: 0,
  selectedUser: null,
  userWithMostFollowers: null,
  userWithMostTweets: null,
  allUsers: [],
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
          ...state,
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
          ...state,
          items: state.items,
          userCount: action.payload.length,
          isLoading: false,
          error: null,
        };
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserWithMostTweets.fulfilled, (state, action) => {
        const user = action.payload;
        return {
          ...state,
          selectedUser: user,
          isLoading: false,
          error: null,
          userWithMostTweets: action.payload,
        };
      })
      .addCase(getUserWithMostFollowers.fulfilled, (state, action) => {
        const user = action.payload;
        return {
          ...state,
          selectedUser: user,
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
          fetchUsersByPage.pending,
          fetchFilteredUsers.pending,
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
          fetchUsersByPage.rejected,
          fetchFilteredUsers.rejected,
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
