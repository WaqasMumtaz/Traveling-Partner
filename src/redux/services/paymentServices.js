import axios from "axios";

export const payByCard = async (data) => {
  return new Promise((res, rej) => {
    axios({
      url: "/payment/byCard",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    })
      .then((resp) => {
        res(resp.data);
      })
      .catch((err) => {
        if (
          !err?.response ||
          err?.response?.data?.error?.name === "MongoNetworkError" ||
          err?.response?.data?.error?.type === "StripeConnectionError"
        ) {
          return rej("Network error.Please check your connection");
        }
        rej(
          (err?.response?.data?.error?.statusCode === 402 &&
            "Your card's expiration year or month is invalid") ||
            (err?.response?.data?.error?.type === "StripeAuthenticationError" &&
              "Invalid Card Number") ||
            err?.response?.data?.error ||
            err?.response?.data
        );
      });
  });
};

export const payByBank = async (data) => {
  return new Promise((res, rej) => {
    axios({
      url: "/payment/byBank",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
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
