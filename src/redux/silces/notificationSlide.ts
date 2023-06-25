import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../root/store";
import { NotificationEntity } from "../../models/notification";

export interface NotificationState {
  isLoading: boolean;
  notifications: NotificationEntity[] | null;
  isError: boolean;
}

const initialState: NotificationState = {
  isLoading: false,
  notifications: null,
  isError: false,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    getNotifications: (state, action) => {
      state.isLoading = true;
    },
    getNotificationsSuccess: (state, action) => {
      state.isLoading = false;
      state.notifications = action.payload;
      state.isError = false;
    },
    getNotificationsFalse: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  getNotifications,
  getNotificationsSuccess,
  getNotificationsFalse,
} = notificationSlice.actions;

// Selectors
export const selectNotificationList = (state: RootState) =>
  state.notification.notifications;
export const selectNotificationLoading = (state: RootState) =>
  state.notification.isLoading;
export const selectNotificationError = (state: RootState) =>
  state.notification.isError;

export default notificationSlice.reducer;
