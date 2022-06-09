import { TOURS_ACTION_TYPES } from "./tours.types";

export const setToursData = (toursData) => {
  return { type: TOURS_ACTION_TYPES.SET_TOURS_DATA, payload: toursData };
};

export const fetchToursStart = () => {
  return { type: TOURS_ACTION_TYPES.FETCH_TOURS_START };
};

export const fetchToursSuccess = (toursData) => {
  return { type: TOURS_ACTION_TYPES.FETCH_TOURS_SUCCESS, payload: toursData };
};

export const fetchToursFailure = (error) => {
  return { type: TOURS_ACTION_TYPES.FETCH_TOURS_FAILURE, payload: error };
};

export const fetchToursAsync = () => async (dispatch) => {
  dispatch(fetchToursStart());
  try {
    const tours = await fetch("http://localhost:8000/api/v1/tours");
    dispatch(fetchToursSuccess(tours));
  } catch (error) {
    dispatch(fetchToursFailure(error));
  }
};
