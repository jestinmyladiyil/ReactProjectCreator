import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    showLoader: (loading, action) => true,
    hideLoader: (loading, action) => false,
  },
});

export default slice.reducer;
export const { showLoader, hideLoader } = slice.actions;
