import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFocuseInitialState {
  isFocused: boolean;
}

const initialState: IFocuseInitialState = {
  isFocused: false,
};

export const focuseSlice = createSlice({
  name: "focuse",
  initialState,
  reducers: {
    setIsFocused: (state, action: PayloadAction<boolean>) => {
      state.isFocused = action.payload;
    },
  },
});
