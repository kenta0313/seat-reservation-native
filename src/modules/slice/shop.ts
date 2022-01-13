import { createSlice, PayloadAction} from "@reduxjs/toolkit";

type Shop = {
  readonly name: string;
  readonly time: {
    monday: {
      start: Date;
      end: Date;
    } | string;
  }
}

const initialState: Shop = {
  name: '',
  time: {
    monday: ""
  }
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addShop: (state, action: PayloadAction<Shop>) => {
      state.name = action.payload.name;
      state.time = action.payload.time;
    }
  }
});