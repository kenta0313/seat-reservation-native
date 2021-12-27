import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { seatSlice } from "./slice/seat";

const rootReducer = combineReducers({
  seat: seatSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});
