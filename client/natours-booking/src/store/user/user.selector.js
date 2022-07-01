import { createSelector } from "reselect";

const selectUserReducer = (state) => {
  return state.user;
};

export const selectUserIsLoading = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.isLoading
);

export const selectUserIsLoggedIn = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.isLoggedIn
);

export const selectUserToken = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.token
);

export const selectUserDetails = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.details
);
