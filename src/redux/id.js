// import
import { createSlice } from "@reduxjs/toolkit";

// init
const initialState = {
  value: "",
};

// slice
export const idSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.value = action.payload;
    },
  },
});

// export
export const { setId } = idSlice.actions;
export default idSlice.reducer;
