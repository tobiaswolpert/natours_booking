import { USER_ACTION_TYPES } from "./user.reducer";

export const setCurrentUser = (user) => {
  return { paylod: user, action: USER_ACTION_TYPES.SET_CURRENT_USER };
};
