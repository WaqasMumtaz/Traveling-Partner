import { GET_NOTIFICATIONS, REMOVE_NOTIFICATIONS } from "./type";

export const getNotifications = (notifications) => ({
  type: GET_NOTIFICATIONS,
  payload: notifications,
});

export const removeNotification = (notificationId) => ({
  type: REMOVE_NOTIFICATIONS,
  payload: notificationId,
});
