import { SET_USER, LOG_OUT, UPDATE_PROFILE } from "../actions/type";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...action.payload,
        isAuthenticated: true,
      };
    }
    case UPDATE_PROFILE: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case LOG_OUT: {
      return { ...state, user: null, token: null, isAuthenticated: false };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
