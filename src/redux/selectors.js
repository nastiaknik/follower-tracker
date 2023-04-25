/* import { createSelector } from "@reduxjs/toolkit"; */

export const selectUsers = (state) => state.users.items;

export const selectUsersCount = (state) => state.users.userCount;

export const selectFollowingUsers = (state) =>
  state.users.items?.filter((user) => user.isFollowing);

export const selectNotFollowingUsers = (state) =>
  state.users.items?.filter((user) => !user.isFollowing);

/* export const selectFilterValue = state => state.filter; */

/* export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilterValue],
  (users, filterValue) => {
    return users.filter(user => {
      return (
        user.name.toLowerCase().includes(filterValue.toLowerCase().trim()) ||
        user.nickname.includes(filterValue.toLowerCase().trim())
      );
    });
  }
); */

/* export const selectFilteredFollowingUsers = createSelector(
  [selectFollowingUsers, selectFilterValue],
  (following, filterValue) => {
    return following.filter(user => {
      return (
        user.name.includes(filterValue.toLowerCase().trim()) ||
        user.nickname.includes(filterValue.toLowerCase().trim())
      );
    });
  }
); */

/* export const selectFilteredNotFollowingUsers = createSelector(
  [selectNotFollowingUsers, selectFilterValue],
  (notFollowing, filterValue) => {
    return notFollowing.filter(user => {
      return (
        user.name.includes(filterValue.toLowerCase().trim()) ||
        user.nickname.includes(filterValue.toLowerCase().trim())
      );
    });
  }
); */

export const selectIsLoading = (state) => state.users.isLoading;

export const selectError = (state) => state.users.error;
