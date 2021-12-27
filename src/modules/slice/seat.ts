import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

type Seat = {
  readonly name: string;
  readonly seatnumber?: string;
  readonly time: string;
}

const initialState: Seat = {
  name: "",
  seatnumber: "",
  time: ""
};

export const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<Pick<Seat, 'name'>>) => {
      state.name = action.payload.name;
    }
  }
});
