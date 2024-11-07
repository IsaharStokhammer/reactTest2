//FILL HERE 3.1
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {floorAccess: boolean[]} = {floorAccess: [false, false, false, false, false]};

const floorsSlice = createSlice({
  initialState,
  name: "floors",
  reducers: {
    changeAccess: (state, action: PayloadAction<number>) => {
      state.floorAccess[action.payload] = !state.floorAccess[action.payload];
    },
  },
});

export const { changeAccess } = floorsSlice.actions;
export default floorsSlice.reducer;
