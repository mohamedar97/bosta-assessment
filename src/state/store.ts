import { configureStore } from "@reduxjs/toolkit";
import shipmentDetailsReducer from "./ShipmentDetails/shipmentDetailsSlice";

export const store = configureStore({
  reducer: {
    shipmentDetails: shipmentDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
