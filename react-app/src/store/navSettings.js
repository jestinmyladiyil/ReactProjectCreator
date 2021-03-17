import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "navSettings",
  initialState: {},
  reducers: {
    userUpdated: (navSettings, action) => {
      navSettings.userName = action.payload.userName;
      navSettings.userCode = action.payload.userCode;
    },
    langUpdated: (navSettings, action) => {
      navSettings.language = action.payload;
    },
    themeUpdated: (navSettings, action) => {
      navSettings.theme = action.payload;
    },
  },
});

export default slice.reducer;
export const { userUpdated, langUpdated, themeUpdated } = slice.actions;
