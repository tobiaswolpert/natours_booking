import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  isLoggedIn: false,
  isLoading: false,
  token: "",
  details: "",
  status: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.LOGIN_USER_START:
      return { ...state, isLoading: true };

    case USER_ACTION_TYPES.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        token: payload.token,
        status: payload.status,
        details: payload.data.user,
      };

    case USER_ACTION_TYPES.LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        status: payload.message,
        token: "",
        details: "",
      };

    default:
      return state;
  }
};
