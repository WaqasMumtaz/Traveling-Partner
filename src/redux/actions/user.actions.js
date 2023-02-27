import { LOG_OUT, SET_USER, UPDATE_PROFILE } from "./type";

export const logIn = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};

export const remove_user = () => {
  return {
    type: "REMOVE_USER",
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const update_profile = (data) => ({
  type: UPDATE_PROFILE,
  payload: data,
});
