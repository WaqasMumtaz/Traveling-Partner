import axios from "axios";

// Intercept and refresh expired tokens for multiple requests (same implementation but with some abstractions)
//
// HOW TO USE:
// import applyAppTokenRefreshInterceptor from 'axios.refresh_token.2.js';
// import axios from 'axios';
// ...
// applyAppTokenRefreshInterceptor(axios); // register the interceptor with all axios instance
// ...
// - Alternatively:
// const apiClient = axios.create({baseUrl: 'example.com/api'});
// applyAppTokenRefreshInterceptor(apiClient); // register the interceptor with one specific axios instance
// ...
// - With custom options:
// applyAppTokenRefreshInterceptor(apiClient, {
//      shouldIntercept: (error) => {
//          return error.response.data.errorCode === 'EXPIRED_ACCESS_TOKEN';
//      }
// ); // register the interceptor with one specific axios instance
//
// PS: You may need to figure out some minor things yourself as this is just a proof of concept and not a tutorial.
// Forgive me in advance

import { RefreshTokenUrl } from "Constants";
import authActions from "./auth/actions";

const shouldIntercept = error => {
  try {
    return error.response.status === 401;
  } catch (e) {
    return false;
  }
};

const setTokenData = (tokenData = {}, axiosClient, reduxStore) => {
  reduxStore.dispatch(authActions.tokenRefresh(tokenData.idToken));
  // If necessary: save to storage
  //   tokenData's content includes data from handleTokenRefresh(): {
  //     idToken: data.auth_token,
  //     refreshToken: data.refresh_token,
  //     expiresAt: data.expires_in,
  // };
};

const handleTokenRefresh = refreshToken => {
  // const refreshToken = window.localStorage.getItem("refreshToken");
  return new Promise((resolve, reject) => {
    axios
      .post(RefreshTokenUrl, { refreshToken })
      .then(({ data }) => {
        const tokenData = {
          idToken: data.token,
          refreshToken: data.refreshToken
        };
        resolve(tokenData);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const attachTokenToRequest = (request, token) => {
  request.headers["Authorization"] = "Bearer " + token;

  // If there is an edge case where access token is also set in request query,
  // this is also a nice place to add it
  // Example: /orders?token=xyz-old-token
  // if (/\/orders/.test(request.url)) {
  //   request.params.token = token;
  // }
};

const axiosInterceptor = (axiosClient, reduxStore, customOptions = {}) => {
  let isRefreshing = false;
  let failedQueue = [];

  const options = {
    attachTokenToRequest,
    handleTokenRefresh,
    setTokenData,
    shouldIntercept,
    ...customOptions
  };
  const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });

    failedQueue = [];
  };

  const interceptor = error => {
    if (!options.shouldIntercept(error)) {
      return Promise.reject(error);
    }

    if (error.config._retry || error.config._queued) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;
    if (isRefreshing) {
      return new Promise(function(resolve, reject) {
        failedQueue.push({ resolve, reject });
      })
        .then(token => {
          originalRequest._queued = true;
          options.attachTokenToRequest(originalRequest, token);
          return axiosClient.request(originalRequest);
        })
        .catch(err => {
          return Promise.reject(error); // Ignore refresh token request's "err" and return actual "error" for the original request
        });
    }

    originalRequest._retry = true;
    isRefreshing = true;
    return new Promise((resolve, reject) => {
      options.handleTokenRefresh
        .call(
          options.handleTokenRefresh,
          reduxStore.getState().auth.refreshToken
        )
        .then(tokenData => {
          options.setTokenData(tokenData, axiosClient, reduxStore);
          options.attachTokenToRequest(originalRequest, tokenData.idToken);
          processQueue(null, tokenData.idToken);
          resolve(axiosClient.request(originalRequest));
        })
        .catch(err => {
          processQueue(err, null);
          reject(err);
        })
        .finally(() => {
          isRefreshing = false;
        });
    });
  };

  const requestInterceptor = config => {
    if ("Authorization" in config.headers) {
      return config;
    }
    config.headers["Authorization"] =
      "Bearer " + reduxStore.getState().auth.accessToken;
    return config;
  };

  axiosClient.interceptors.request.use(requestInterceptor);
  axiosClient.interceptors.response.use(undefined, interceptor);
};

export default axiosInterceptor;