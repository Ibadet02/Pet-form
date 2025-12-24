import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProgressState {
  currentProgress: number;
}

const initialState: ProgressState = {
  currentProgress: 0,
};

const formProgressSlice = createSlice({
  name: "formProgress",
  initialState,
  reducers: {
    next: (state) => {
      state.currentProgress++;
    },
    previous: (state) => {
      state.currentProgress--;
    },
    navigate: (state, action: PayloadAction<number>) => {
      state.currentProgress = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { next, previous, navigate } = formProgressSlice.actions;

export default formProgressSlice.reducer;
