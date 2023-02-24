import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import createReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createMigrate from "redux-persist/es/createMigrate";
import axios from "axios";
import applyAppTokenRefreshInterceptor from "./axios_interceptor";
import { BaseUrl } from "Constants";

const migrations = {
  0: (state) => {
    return {
      ...state,
      catalog: {
        ...state.catalog,
        categories: [],
        brands: [],
      },
    };
  },
  1: (state) => {
    return {
      ...state,
      auth: {
        ...state.auth,
        permissions: [],
      },
    };
  },
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "scrumboard",
    "themeSetting",
    "LanguageSwitcher",
    "themeChanger",
    "notifications",
    "orders",
    "users",
    "catalog",
  ],
  version: 1,
  migrate: createMigrate(migrations),
};
const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, routeMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, createReducer());
const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);

const axiosClient = axios.create({ baseUrl: BaseUrl });
applyAppTokenRefreshInterceptor(axiosClient, store);

export { store, history, persistor, axiosClient };
