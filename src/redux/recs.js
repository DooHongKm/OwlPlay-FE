// import
import { createSlice } from "@reduxjs/toolkit";

// init
const initialState = {
  value: [],
};

// slice
export const recsSlice = createSlice({
  name: "recs",
  initialState,
  reducers: {
    setRecs: (state, action) => {
      state.value = action.payload;
    },
  },
});

// export
export const { setRecs } = recsSlice.actions;
export default recsSlice.reducer;