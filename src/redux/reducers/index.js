import { combineReducers } from "redux";
import userReducer from "./user.reducers";
import companyReducer from "./company.reducers";
import drawerReducer from "./drawer.reducer";
import shipmentReducer from "./shipment.Reducer";
import notificationReducer from "./notifications.reducer";
import { LOG_OUT } from "../actions/type";
const appReducer = combineReducers({
  user: userReducer,
  company: companyReducer,
  drawer: drawerReducer,
  shipments: shipmentReducer,
  notifications: notificationReducer,
});

export default (state, action) => {
  if (action.type === LOG_OUT) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
