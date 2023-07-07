import axios from "axios";

export const getNotifications = async (companyId, token) => {
  return new Promise((res, rej) => {
    axios({
      url: `/shipment/notifications/${companyId}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        res(resp.data);
      })
      .catch((err) => {
        if (!err?.response) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error || err?.response?.data);
      });
  });
};

export const uploadRequestedDocs = async (shipmentId, token, data) => {
  return new Promise((res, rej) => {
    axios({
      url: `/shipment/updateDocs/${shipmentId}`,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    })
      .then((resp) => {
        res(resp.data);
      })
      .catch((err) => {
        if (!err?.response) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error || err?.response?.data);
      });
  });
};
