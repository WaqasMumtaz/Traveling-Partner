import {
  GET_SHIPMENTS,
  ADD_NEW_SHIPMENT,
  ADD_SHIPMENT_FOR_LATER,
  UPDATE_SHIPMENT_FOR_LATER,
  ADD_SHIPMENT_AFTER_UPDATE,
  UPDATE_PENDING_SHIPMENT,
  UPDATE_SHIPMENT,
} from "../actions/type";
import moment from "moment";

const getRemainingDays = (shipments) => {
  let daysRemaining = 0;
  if (shipments.length > 0) {
    let currentDate = moment().format("YYYY MM DD");
    const filteredShipments = shipments.filter((shipment) => {
      let desiredDeliveryDate = moment(
        `${shipment.desiredDeliveryDate}`
      ).format("YYYY MM DD");
      return moment(currentDate).isSameOrBefore(desiredDeliveryDate);
    });
    if (filteredShipments.length) {
      let firstShipment = filteredShipments[0];
      let desired = moment(firstShipment.desiredDeliveryDate);
      daysRemaining = Math.max(
        Math.ceil(moment.duration(moment(desired).diff(moment())).asDays()),
        0
      );
    }
  }
  return daysRemaining;
};

const getValueOfCargo = (shipments) => {
  return shipments.reduce(
    (total, obj) => total + (obj.estimatedValueOfGood || 0),
    0
  );
};

const getSortedArray = (shipments = []) =>
  shipments.sort((shipA, shipB) => {
    const dateA = moment(`${shipA.desiredDeliveryDate}`).format("YYYY MM DD");
    const dateB = moment(`${shipB.desiredDeliveryDate}`).format("YYYY MM DD");
    return dateA > dateB ? 1 : dateB > dateA ? -1 : 0;
  });

const getCargoSpend = (arr = []) =>
  arr.reduce(
    (totalAcc, obj) =>
      totalAcc +
      obj?.selectedQoute?.arr.reduce((acc, obj) => acc + obj?.value * 1, 0),
    0
  );

const mappedData = (shipments = [], payload) => {
  const shipments_ = Array.isArray(shipments) ? shipments : [];
  return shipments_.map((shipment) =>
    shipment._id === payload._id ? payload : shipment
  );
};

const addNewShipment = (newShip, shipments = []) => {
  let shipments_ = Array.isArray(shipments) ? shipments : [];
  return [{ ...newShip }, ...shipments_];
};

const isArray = (shipments) => (Array.isArray(shipments) ? shipments : []);

const initialState = {
  activeShipments: null,
  pendingShipments: null,
  completedShipments: null,
  daysRemaining: 0,
  valueOfCargo: 0,
  cargoSpend: 0,
};

const shipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHIPMENTS: {
      const activeShipments = getSortedArray(
        action.payload.filter(
          (shipment) => shipment.shipmentStatus === "active"
        )
      );

      const pendingShipments = getSortedArray(
        action.payload.filter(
          (shipment) =>
            shipment.shipmentStatus === "pending" ||
            (shipment.savedStatus === "saved" &&
              shipment.status === "Payment Processed" &&
              shipment.shipmentStatus === "upcoming")
        )
      );

      const completedShipments = getSortedArray(
        action.payload.filter(
          (shipment) => shipment.shipmentStatus === "completed"
        )
      );
      const cargoSpend = getCargoSpend([...isArray(activeShipments)]);
      const daysRemaining = getRemainingDays(activeShipments);
      const valueOfCargo = getValueOfCargo([...isArray(activeShipments)]);
      return {
        ...state,
        activeShipments,
        pendingShipments,
        completedShipments,
        daysRemaining,
        valueOfCargo,
        cargoSpend,
      };
    }

    case ADD_NEW_SHIPMENT: {
      let activeShipments = getSortedArray(
        addNewShipment(action.payload, state.activeShipments)
      );

      let daysRemaining = getRemainingDays(activeShipments);
      const valueOfCargo = getValueOfCargo([...isArray(activeShipments)]);
      return {
        ...state,
        activeShipments,
        daysRemaining,
        valueOfCargo,
      };
    }
    case ADD_SHIPMENT_FOR_LATER: {
      let pendingShipments = getSortedArray(
        addNewShipment(action.payload, state.pendingShipments)
      );

      return {
        ...state,
        pendingShipments,
      };
    }
    case UPDATE_SHIPMENT_FOR_LATER: {
      let updatedPendingShipments = state.pendingShipments.map((shipment) => {
        if (shipment._id === action.payload._id) return action.payload;
        return { ...shipment };
      });
      let pendingShipments = getSortedArray(updatedPendingShipments);
      return {
        ...state,
        pendingShipments,
      };
    }

    case ADD_SHIPMENT_AFTER_UPDATE: {
      let updatedPendingShipments = state.pendingShipments.filter(
        (shipment) => shipment._id !== action.payload._id
      );
      let pendingShipments = getSortedArray(updatedPendingShipments);
      const activeShipments = getSortedArray([
        ...state.activeShipments,
        action.payload,
      ]);
      const daysRemaining = getRemainingDays(activeShipments);
      const valueOfCargo = getValueOfCargo([...isArray(activeShipments)]);
      const cargoSpend = getCargoSpend([...isArray(activeShipments)]);
      return {
        ...state,
        activeShipments,
        daysRemaining,
        valueOfCargo,
        cargoSpend,
        pendingShipments,
      };
    }
    case UPDATE_PENDING_SHIPMENT: {
      let updatedPendingShipments = state.pendingShipments.map((shipment) => {
        if (shipment._id === action.payload._id) {
          return action.payload;
        } else {
          return shipment;
        }
      });
      let pendingShipments = getSortedArray(updatedPendingShipments);
      return {
        ...state,
        pendingShipments,
      };
    }
    case UPDATE_SHIPMENT: {
      let activeShipments = mappedData(state?.activeShipments, action.payload);
      return {
        ...state,
        activeShipments,
      };
    }
    default: {
      return state;
    }
  }
};

export default shipmentReducer;
