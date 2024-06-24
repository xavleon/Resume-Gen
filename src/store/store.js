// store.js

import { configureStore } from "@reduxjs/toolkit";
// Import your reducers here
import themeReducer from "./themeSlice";
import aboutReducer from "./aboutSlice";
import skillReducer from "./skillsSlice";
import projectReducer from "./projectSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    about: aboutReducer,
    skills: skillReducer,
    projects: projectReducer,
  },
});

export default store;
