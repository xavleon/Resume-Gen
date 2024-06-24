// features/counter/themeSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  role: "",
  phone: "",
  address: "",
  linkedin: "",
  picture: "",
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    changeAbout(state, action) {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { changeAbout } = aboutSlice.actions;

export default aboutSlice.reducer;
