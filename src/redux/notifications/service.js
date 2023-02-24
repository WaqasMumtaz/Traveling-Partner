import { axiosClient } from "redux/store";
import { SendNotificationUrl } from "Constants";

export const SendNotification = (data) => {
  return axiosClient.post(SendNotificationUrl, data);
};
