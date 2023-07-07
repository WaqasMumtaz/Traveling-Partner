import { GET_COMPANY, SET_COMPANY_DETAIL } from "../actions/type";

const initialState = {
  userId: "",
  companyName: "",
  diffrentNameCompanyUse: "",
  typeOfBusiness: "",
  stateCompanyRegister: "",
  file: "",
  importerCode: "",
  exporterCode: "",
  sameAddress: false,
  streetLine1: "",
  streetLine2: "",
  city: "",
  country: "",
  termsAndCondition: false,
  signature: "",
  cardNo: "",
  holderName: "",
  expiryDate: "",
  cvc: "",
  beneficiaryBankCountry: "",
  beneficiaryBank: "",
  beneficiaryName: "",
  bankAdress: "",
  swiftCode: "",
  contactDetail: "",
  refrenceCodeBank: "",
  createdBy: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_COMPANY_DETAIL: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
