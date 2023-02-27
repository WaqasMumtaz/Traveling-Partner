import axios from "axios";

const createNewShipment = (data, token) => {
  return new Promise((res, rej) => {
    axios({
      url: "/shipment",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
          err?.response?.data?.error?.message?.includes(
            "Could not connect to any servers"
          )
        ) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error || err?.response?.data);
      });
  });
};

const uploadDoc = (formData) => {
  return new Promise((res, rej) => {
    axios({
      url: "/upload",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((resp) => {
        res(resp.data);
      })
      .catch((err) => {
        console.log(err);
        if (
          !err?.response ||
          err?.response?.data?.error?.name === "MongoNetworkError" ||
          err?.response?.data?.error?.message?.includes(
            "Could not connect to any servers"
          )
        ) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error || err?.response?.data);
      });
  });
};

const createFeedBack = (data) => {
  return new Promise((res, rej) => {
    axios({
      url: "/feedback",
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
          err?.response?.data?.error?.message?.includes(
            "Could not connect to any servers"
          )
        ) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error || err?.response?.data);
      });
  });
};

const updateShipment = (data, token, shipmentId) => {
  return new Promise((res, rej) => {
    axios({
      url: `/shipment/${shipmentId}`,
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
          err?.response?.data?.error?.message?.includes(
            "Could not connect to any servers"
          )
        ) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error || err?.response?.data);
      });
  });
};

const getCompanyShipments = (companyId, token) => {
  return new Promise((res, rej) => {
    axios({
      url: `/shipment/getCompanyShipment/${companyId}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        res(resp.data);
      })
      .catch((err) => {
        if (
          !err?.response ||
          err?.response?.data?.error?.name === "MongoNetworkError" ||
          err?.response?.data?.error?.message?.includes(
            "Could not connect to any servers"
          )
        ) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error || err?.response?.data);
      });
  });
};

const payForShipment = (shipmentId, token, data) => {
  return new Promise((res, rej) => {
    axios({
      url: `/shipment/pay/${shipmentId}`,
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
        if (
          !err?.response ||
          err?.response?.data?.error?.name === "MongoNetworkError" ||
          err?.response?.data?.error?.message?.includes(
            "Could not connect to any servers"
          )
        ) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error || err?.response?.data);
      });
  });
};

const getSummaryDetails = (id) => {
  return new Promise((res, rej) => {
    axios
      .get(`/shipment/getShipment/${id}`)
      .then((result) => {
        res(result.data);
      })
      .catch((err) => {
        if (
          !err?.response ||
          err?.response?.data?.error?.name === "MongoNetworkError" ||
          err?.response?.data?.error?.message?.includes(
            "Could not connect to any servers"
          )
        ) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error || err?.response?.data);
      });
  });
};

const createInvoice = (id) => {
  console.log(id);
  return new Promise((res, rej) => {
    axios({
      url: "/invoice",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ id }),
    })
      .then((result) => {
        res(result.data);
      })
      .catch((err) => {
        if (
          !err?.response ||
          err?.response?.data?.error?.name === "MongoNetworkError" ||
          err?.response?.data?.error?.message?.includes(
            "Could not connect to any servers"
          )
        ) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error || err?.response?.data);
      });
  });
};

export {
  createNewShipment,
  uploadDoc,
  createFeedBack,
  updateShipment,
  getCompanyShipments,
  payForShipment,
  getSummaryDetails,
  createInvoice,
};
