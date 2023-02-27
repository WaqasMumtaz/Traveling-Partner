import { GET_COMPANY, SET_COMPANY_DETAIL } from "./type";

export const getCompany = (data) => {
  return {
    type: GET_COMPANY,
    payload: data,
  };
};

export const setCompanyDetail = (data) => {
  return {
    type: SET_COMPANY_DETAIL,
    payload: data,
  };
};
