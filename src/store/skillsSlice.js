// features/counter/themeSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "JavaScript",
  },
];

const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill(state, action) {
      state = state.push(action.payload);
    },
  },
});

export const { addSkill } = skillSlice.actions;

export default skillSlice.reducer;
