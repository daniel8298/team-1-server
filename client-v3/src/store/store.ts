import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../featuers/users/userSlice";

export const store = configureStore({
  reducer: {
    token: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
