import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = (state) => state.users.items;

export const selectUsersCount = (state) => state.users.userCount;

export const selectFollowingUsers = (state) =>
  state.users.items?.filter((user) => user.isFollowing);

export const selectNotFollowingUsers = (state) =>
  state.users.items?.filter((user) => !user.isFollowing);

export const selectFilter = (state) => state.filters;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    switch (filter.value) {
      case "all":
        return users;
      case "followed":
        return users.filter((user) => user.isFollowing);
      case "notFollowed":
        return users.filter((user) => !user.isFollowing);
      default:
        return;
    }
  }
);

export const selectSeletedUser = (state) => state.users.selectedUser;

export const selectUserWithMostTweets = (state) =>
  state.users.userWithMostTweets;

export const selectUserWithMostFollowers = (state) =>
  state.users.userWithMostFollowers;

export const selectAllUsers = (state) => state.users.allUsers;

export const selectIsLoading = (state) => state.users.isLoading;

export const selectError = (state) => state.users.error;
