import { USER_ACTION_TYPES } from "./user.types";

export const loginUserStart = () => {
  return { type: USER_ACTION_TYPES.LOGIN_USER_START };
};

export const loginUserSuccess = (userData) => {
  return { type: USER_ACTION_TYPES.LOGIN_USER_SUCCESS, payload: userData };
};

export const loginUserFailure = (error) => {
  return { type: USER_ACTION_TYPES.LOGIN_USER_FAILURE, payload: error };
};

export const logoutUser = () => {
  return { type: USER_ACTION_TYPES.LOGOUT_USER };
};

export const updateUserStart = () => {
  return { type: USER_ACTION_TYPES.UPDATE_USER_START };
};

export const updateUserSuccess = (userData) => {
  return { type: USER_ACTION_TYPES.UPDATE_USER_SUCCESS, payload: userData };
};

export const updateUserFailure = (error) => {
  return { type: USER_ACTION_TYPES.UPDATE_USER_FAILURE, payload: error };
};

export const updateUserAsync = (data, token) => async (dispatch) => {
  dispatch(updateUserStart());

  try {
    const res = await fetch("http://localhost:8000/api/v1/users/updateMe", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    if (responseData.error) {
      throw new Error(responseData.message);
    }
    dispatch(updateUserSuccess(responseData));
  } catch (err) {
    dispatch(updateUserFailure(err));
  }
};

export const loginUserAsync = (data) => async (dispatch) => {
  dispatch(loginUserStart());
  try {
    const res = await fetch("http://localhost:8000/api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    if (responseData.error) {
      throw new Error(responseData.message);
    }
    console.log("RES", responseData);
    dispatch(loginUserSuccess(responseData));
  } catch (error) {
    dispatch(loginUserFailure(error));
  }
};
