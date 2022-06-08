import { TOURS_ACTION_TYPES } from "./tours.types";

const TOURS_INITIAL_STATE = {
  tours: [],
};

export const toursReducer = (state = TOURS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case TOURS_ACTION_TYPES.SET_TOURS:
      return { ...state, tours: payload };

    default:
      return state;
  }
};
