import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { numberOfSteps } from "../../constants/stepOrders";

type ProgressState = {
  currentStep: boolean;
  isValidated: boolean;
}[];

const initialState: ProgressState = [
  {
    currentStep: true,
    isValidated: false,
  },
  {
    currentStep: false,
    isValidated: false,
  },
  {
    currentStep: false,
    isValidated: false,
  },
];

const formProgressSlice = createSlice({
  name: "formProgress",
  initialState,
  reducers: {
    next: (state) => {
      console.log(state);
      const currIndex = state.findIndex((step) => step.currentStep);
      const isStepValidated = state[currIndex].isValidated;

      if (isStepValidated && state[currIndex + 1]) {
        state[currIndex].currentStep = false;
        state[currIndex + 1].currentStep = true;
      }
    },
    previous: (state) => {
      const currIndex = state.findIndex((step) => step.currentStep);
      const isStepValidated = state[currIndex].isValidated;

      if (isStepValidated && state[currIndex - 1]) {
        state[currIndex].currentStep = false;
        state[currIndex - 1].currentStep = true;
      }
    },
    navigate: (state, action: PayloadAction<number>) => {
      const currIndex = state.findIndex((step) => step.currentStep);
      const isStepValidated = state[currIndex].isValidated;

      if (isStepValidated) {
        state[currIndex].currentStep = false;
        state[action.payload].currentStep = true;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { next, previous, navigate } = formProgressSlice.actions;

export default formProgressSlice.reducer;
