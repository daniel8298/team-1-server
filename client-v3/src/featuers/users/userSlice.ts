import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import Map from "ol/Map";
// import { DisplayModeType } from "./types/mapTypes";
// import { View } from "ol";

interface InitialState {
  token: string | null;
}

const initialState: InitialState = {
  token: null,
};

export const userSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { addToken } = userSlice.actions;
export const userReducer = userSlice.reducer;
