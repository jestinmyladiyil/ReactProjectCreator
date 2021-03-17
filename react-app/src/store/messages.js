import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "messages",
  initialState: [],
  reducers: {
    addSuccessMessage: (messages, action) => {
      messages.push({ type: "SUCCESS", message: action.payload });
    },
    addErrorMessage: (messages, action) => {
      messages.push({ type: "ERROR", message: action.payload });
    },
    addWarningMessage: (messages, action) => {
      messages.push({ type: "WARNING", message: action.payload });
    },
    addInfoMessage: (messages, action) => {
      messages.push({ type: "INFO", message: action.payload });
    },
    deleteMessage: (messages, action) => {
      if (action.payload > -1) messages.splice(action.payload, 1);
    },
    deleteAllMessages: (messages, action) => {
      messages.splice(0, messages.length);
    },
  },
});

export default slice.reducer;
export const {
  addSuccessMessage,
  addErrorMessage,
  addWarningMessage,
  addInfoMessage,
  deleteMessage,
  deleteAllMessages,
} = slice.actions;
