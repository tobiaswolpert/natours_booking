import { createSelector } from "reselect";

// const selectToursReducer = (state) => state?.tours?.tours?.data?.doc ?? [];
const selectToursReducer = (state) => {
  console.log("STATE", state);
  return state.tours.tours;
};
export const selectToursIsLoading = (state) => state.tours.isLoading;

export const selectToursMap = createSelector(
  [selectToursReducer],
  (tours) => tours
);
