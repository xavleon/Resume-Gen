// features/counter/themeSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "purple.400",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
