import customerReducer from "./../features/customerSlice";
import reservationSlice from "@/features/reservationSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    reservations: reservationSlice,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
