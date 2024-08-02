// import
import { createSlice } from "@reduxjs/toolkit";

// init
const initialState = {
  value: {
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    choice5: ""
  },
};

// slice
export const choicesSlice = createSlice({
  name: "choices",
  initialState,
  reducers: {
    setChoice1: (state, action) => {
      state.value.choice1 = action.payload;
    },
    setChoice2: (state, action) => {
      state.value.choice2 = action.payload;
    },
    setChoice3: (state, action) => {
      state.value.choice3 = action.payload;
    },
    setChoice4: (state, action) => {
      state.value.choice4 = action.payload;
    },
    setChoice5: (state, action) => {
      state.value.choice5 = action.payload;
    },
  },
});

// export
export const { setChoice1, setChoice2, setChoice3, setChoice4, setChoice5 } = choicesSlice.actions;
export default choicesSlice.reducer;