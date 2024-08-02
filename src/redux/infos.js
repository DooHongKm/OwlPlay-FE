// import
import { createSlice } from "@reduxjs/toolkit";

// init
const initialState = {
  value: {},
};

// slice
export const infosSlice = createSlice({
  name: "infos",
  initialState,
  reducers: {
    setInfos: (state, action) => {
      state.value = action.payload;
    },
  },
});

// export
export const { setInfos } = infosSlice.actions;
export default infosSlice.reducer;