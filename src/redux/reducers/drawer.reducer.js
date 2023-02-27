import { TOGGLE_DRAWER } from "../actions/type";

const initialState = {
  isOpen: false,
};

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    default: {
      return state;
    }
  }
};

export default drawerReducer;
