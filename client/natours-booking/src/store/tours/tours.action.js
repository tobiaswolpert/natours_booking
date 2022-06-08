import { TOURS_ACTION_TYPES } from "./tours.types";

export const fetchToursStart = () => {
  return { type: TOURS_ACTION_TYPES.FETCH_TOURS_START };
};

export const fetchToursSuccess = (toursData) => {
  return { type: TOURS_ACTION_TYPES.FETCH_TOURS_SUCCESS, payload: toursData };
};

export const fetchToursFailure = (error) => {
  return { type: TOURS_ACTION_TYPES.FETCH_TOURS_FAILURE, payload: error };
};
