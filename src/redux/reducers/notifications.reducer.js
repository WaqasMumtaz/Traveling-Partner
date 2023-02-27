import { GET_NOTIFICATIONS, REMOVE_NOTIFICATIONS } from "../actions/type";

const initialState = {
  notifications: [],
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      {
        return {
          ...state,
          notifications: action.payload,
        };
      }
    case REMOVE_NOTIFICATIONS:
      {
        const filteredNotifications = state.notifications.filter(
          (notification) => notification._id !== action.payload
        );
        return {
          ...state,
          notifications: filteredNotifications,
        };
      }

    default: {
      return state;
    }
  }
};

export default notificationsReducer;
