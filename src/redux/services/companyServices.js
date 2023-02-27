import axios from "axios";

export const getCompany = (companyId, token) => {
  if (token) {
    return new Promise((res, rej) => {
      axios({
        url: `/company/getCompany/${companyId}`,
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
  } else {
    return new Promise((res, rej) => {
      axios
        .get(`/company/getCompany/${companyId}`)
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
  }
};

export const submitCompayDetails = (data, token) => {
  return new Promise((res, rej) => {
    axios({
      url: "/company/companyDetails",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify(data),
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

export const submitTermsAndConditions = (data, token) => {
  return new Promise((res, rej) => {
    axios({
      url: "/company/termsAndCondition",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify(data),
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

export const submitBankDetailData = (id, token) => {
  return new Promise((res, rej) => {
    axios({
      url: `/company/bankDetails/${id}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        res(resp?.data);
      })
      .catch((err) => {
        if (!err?.response) {
          return rej("Network error.Please check your connection");
        }
        rej(err?.response?.data?.error || err?.response?.data);
      });
  });
};

export const updateCompanyData = (data, companyId) => {
  return new Promise((res, rej) => {
    axios({
      url: `/company/logisticPartners/${companyId}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
