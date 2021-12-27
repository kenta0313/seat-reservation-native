import { store } from "./store";

export type RootState = ReturnType<typeof store.getState>;
export const seatSelector = (state: RootState) => state.seat;
