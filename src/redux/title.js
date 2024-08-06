// import
import { createSlice } from "@reduxjs/toolkit";

// init
const initialState = {
  value: "",
};

// slice
export const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.value = action.payload;
    },
  },
});

// export
export const { setTitle } = titleSlice.actions;
export default titleSlice.reducer;
