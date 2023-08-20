import { configureStore } from "@reduxjs/toolkit";
import configurationReducer from "redux/configurationSlice";

export const store = configureStore({
  reducer: { config: configurationReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
