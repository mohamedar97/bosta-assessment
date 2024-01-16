import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ShipmentEventDetails {
  hub?: string;
  state: string;
  date: string;
  time: string;
  reason?: string;
}
interface ShipmentDetails {
  shipmentNumber: string;
  shipmentStatus: string;
  lastUpdated: string;
  vendorName: string;
  deliveryDate: string;
  shipmentEvents: ShipmentEventDetails[];
}

const initialState: ShipmentDetails = {
  shipmentNumber: "",
  shipmentStatus: "",
  lastUpdated: "",
  vendorName: "",
  deliveryDate: "",
  shipmentEvents: [],
};

const shipmentDetailsSlice = createSlice({
  name: "shipmentDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchShipmentDetails.fulfilled,
      (state, action: PayloadAction<ShipmentDetails>) => {
        state.shipmentNumber = action.payload.shipmentNumber;
        state.shipmentStatus = action.payload.shipmentStatus;
        state.lastUpdated = action.payload.lastUpdated;
        state.vendorName = action.payload.vendorName;
        state.deliveryDate = action.payload.deliveryDate;
        state.shipmentEvents = action.payload.shipmentEvents;
      }
    );
  },
});

export const fetchShipmentDetails = createAsyncThunk(
  "shipmentDetails/fetchShipmentDetails",
  async (shipmentNumber: string) => {
    const response = await fetch(
      `https://tracking.bosta.co/shipments/track/${shipmentNumber}`
    );
    const data = await response.json();

    const returnValue: ShipmentDetails = {
      shipmentNumber: data.TrackingNumber,
      shipmentStatus: data.CurrentStatus.state,
      lastUpdated: data.CurrentStatus.timestamp,
      vendorName: data.provider,
      deliveryDate: data.PromisedDate,
      shipmentEvents: data.TransitEvents.map((event: any) => {
        return {
          hub: event.hub ?? undefined,
          state: event.state,
          date: event.timestamp,
          time: event.timestamp,
          reason: event.reason ?? undefined,
        };
      }),
    };

    return returnValue;
  }
);

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default shipmentDetailsSlice.reducer;
