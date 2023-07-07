import {
  GET_SHIPMENTS,
  ADD_NEW_SHIPMENT,
  ADD_SHIPMENT_FOR_LATER,
  UPDATE_SHIPMENT_FOR_LATER,
  ADD_SHIPMENT_AFTER_UPDATE,
  UPDATE_PENDING_SHIPMENT,
  UPDATE_SHIPMENT,
} from "./type";

export const getShipments = (data) => {
  return {
    type: GET_SHIPMENTS,
    payload: data,
  };
};

export const addNewShipmet = (data) => {
  return {
    type: ADD_NEW_SHIPMENT,
    payload: data,
  };
};

export const addNewShipmetForLater = (data) => {
  return {
    type: ADD_SHIPMENT_FOR_LATER,
    payload: data,
  };
};

export const updateShipmetForLater = (data) => {
  return {
    type: UPDATE_SHIPMENT_FOR_LATER,
    payload: data,
  };
};

export const addShipmentAfterUpdate = (data) => {
  return {
    type: ADD_SHIPMENT_AFTER_UPDATE,
    payload: data,
  };
};

export const updatePendingShipment = (data) => ({
  type: UPDATE_PENDING_SHIPMENT,
  payload: data,
});

export const updateShipment = (data) => ({
  type: UPDATE_SHIPMENT,
  payload: data,
});
