// store.js

import { configureStore } from "@reduxjs/toolkit";
// Import your reducers here
import themeReducer from "./themeSlice";
import aboutReducer from "./aboutSlice";
import skillReducer from "./skillsSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    about: aboutReducer,
    skills: skillReducer,
  },
});

export default store;
