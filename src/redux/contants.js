export const statusFilters = Object.freeze({
  all: "all",
  followed: "followed",
  notFollowed: "notFollowed",
});

export const filterOptions = [
  { value: statusFilters.all, label: "All" },
  { value: statusFilters.followed, label: "Followed" },
  { value: statusFilters.notFollowed, label: "Not followed" },
];
