import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";

type Seat = {
  readonly name: string;
  readonly src: ImageSourcePropType;
  readonly seatnumber?: string;
  readonly time: string;
}

const initialState: Seat = {
  name: "",
  src: 0,
  seatnumber: "",
  time: ""
};

export const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    addSeat: (state, action: PayloadAction<Pick<Seat, 'name' | 'src'>>) => {
      state.name = action.payload.name;
      state.src = action.payload.src;
    }
  }
});
