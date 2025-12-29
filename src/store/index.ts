import { configureStore } from "@reduxjs/toolkit";
import formProgressReducer from "./formProgress/formProgressSlice";

export const store = configureStore({
  reducer: {
    formProgress: formProgressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
