import axios from "axios";

function register(body) {
  return new Promise((res, rej) => {
    axios({
      url: "/user/signUp",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(body),
    })
      .then((resp) => {
        res(resp.data);
      })
      .catch((err) => {
        if (!err?.response) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error);
      });
  });
}

function registerWithGoogle(body) {
  return new Promise((res, rej) => {
    axios({
      url: "/user/signUpWithGoogle",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(body),
    })
      .then((resp) => {
        res(resp.data);
      })
      .catch((err) => {
        if (!err.response) {
          return rej("Network error.Please check your connection");
        }
        rej(err.response.data.error);
      });
  });
}

function login(body) {
  return new Promise((res, rej) => {
    axios({
      url: "/user/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(body),
    })
      .then((resp) => {
        axios.defaults.headers.common.Authorization = `Bearer ${resp.data.token}`;
        res(resp.data);
      })
      .catch((err) => {
        if (!err?.response) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error);
      });
  });
}

function loginWithToken(token) {
  return new Promise((resolve, reject) => {
    axios
      .get("/user/profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setSession(token);
        resolve(res.data);
      })
      .catch((err) => {
        if (!err?.response) {
          return reject("Network error.Please check your connection");
        }
        reject(err?.response?.data?.error);
      });
  });
}

function setSession(access_token) {
  if (access_token) {
    localStorage.setItem("jwt_access_token", access_token);
    axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
  } else {
    localStorage.removeItem("jwt_access_token");
    delete axios.defaults.headers.common.Authorization;
  }
}

function logout() {
  setSession(null);
}

function getAccessToken() {
  return window.localStorage.getItem("jwt_access_token");
}

function updateProfile(body, userId) {
  console.log(body);
  return new Promise((resolve, reject) => {
    axios
      .patch(`/user/updateProfile/${userId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: body,
      })
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        if (!err?.response) {
          return reject("Network error.Please check your connection");
        }
        reject(err?.response?.data?.error);
      });
  });
}

const resetPassword = (data, token, userId) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `/user/resetPassword/${userId}`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err?.response?.data?.error);
        if (
          !err?.response ||
          err?.response?.data?.error?.name === "MongoNetworkError" ||
          err?.response?.data?.error?.includes(
            "Could not connect to any servers"
          )
        ) {
          return reject("Network error.Please check your connection");
        }
        reject(err?.response?.data?.error);
      });
  });
};
export {
  register,
  registerWithGoogle,
  login,
  logout,
  loginWithToken,
  getAccessToken,
  updateProfile,
  resetPassword,
};
