const axios = require("axios");

export const getHsCodes = () => {
  return new Promise((res, rej) => {
    axios({
      url: `/hscode/`,
      method: "GET",
    })
      .then((resp) => {
        res(resp.data);
      })
      .catch((err) => {
        if (
          !err?.response ||
          err?.response?.data?.error?.name === "MongoNetworkError"
        ) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error || err?.response?.data);
      });
  });
};
