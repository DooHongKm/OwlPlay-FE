// import
import { createSlice } from "@reduxjs/toolkit";

// init
const initialState = {
  value: 0,
};

// slice
export const choiceNumSlice = createSlice({
  name: "choiceNum",
  initialState,
  reducers: {
    setChoiceNum: (state, action) => {
      state.value = action.payload;
    },
    incChoiceNum: (state) => {
      state.value += 1;
    },
    decChoiceNum: (state) => {
      state.value -= 1;
    },
  },
});

// export
export const { setChoiceNum, incChoiceNum, decChoiceNum } = choiceNumSlice.actions;
export default choiceNumSlice.reducer;