// store.js

import { configureStore } from "@reduxjs/toolkit";
// Import your reducers here
import themeReducer from "./themeSlice";
import aboutReducer from "./aboutSlice";
import skillReducer from "./skillsSlice";
import projectReducer from "./projectSlice";
import educationReducer from "./educationSlice";
import experienceReducer from "./experienceSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    about: aboutReducer,
    skills: skillReducer,
    projects: projectReducer,
    education: educationReducer,
    experience: experienceReducer,
  },
});

export default store;
