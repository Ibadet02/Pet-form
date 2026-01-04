import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { numberOfSteps } from "../../constants/stepOrders";

type ProgressState = {
  currentStep: boolean;
  isValidated: boolean;
}[];

const initialState: ProgressState = Array.from(
  { length: numberOfSteps },
  (_, i) => ({
    currentStep: i === 0,
    isValidated: false,
  })
);

const formProgressSlice = createSlice({
  name: "formProgress",
  initialState,
  reducers: {
    next: (state) => {
      const currIndex = state.findIndex((step) => step.currentStep);
      const isStepValidated = state[currIndex].isValidated;

      if (state[currIndex + 1]) {
        state[currIndex].currentStep = false;
        state[currIndex + 1].currentStep = true;
      }
    },
    previous: (state) => {
      const currIndex = state.findIndex((step) => step.currentStep);

      if (state[currIndex - 1]) {
        state[currIndex].currentStep = false;
        state[currIndex - 1].currentStep = true;
      }
    },
    navigate: (state, action: PayloadAction<number>) => {
      const currIndex = state.findIndex((step) => step.currentStep);
      const isStepValidated = state[currIndex].isValidated;

      if (true) {
        state[currIndex].currentStep = false;
        state[action.payload].currentStep = true;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { next, previous, navigate } = formProgressSlice.actions;

export default formProgressSlice.reducer;
