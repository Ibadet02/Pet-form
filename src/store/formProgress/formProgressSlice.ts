import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StepOrders from "../../constants/stepOrders";

const numberOfSteps = Object.keys(StepOrders).length;

interface ProgressState {
  currentProgress: number;
}

const initialState: ProgressState = {
  currentProgress: 1,
};

const formProgressSlice = createSlice({
  name: "formProgress",
  initialState,
  reducers: {
    next: (state) => {
      if (state.currentProgress < numberOfSteps) {
        state.currentProgress++;
      } else {
        state.currentProgress = 1;
      }
    },
    previous: (state) => {
      if (state.currentProgress > 1) {
        state.currentProgress--;
      } else {
        state.currentProgress = numberOfSteps;
      }
    },
    navigate: (state, action: PayloadAction<number>) => {
      state.currentProgress = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { next, previous, navigate } = formProgressSlice.actions;

export default formProgressSlice.reducer;
