import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    company: "Google",
    role: "Software Engineer",
    start: "2018",
    end: "2021",
    description: "Worked on the Google search engine",
    employmentType: "Full-time",
  },
];

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience(state) {
      state.push({
        id: state.length + 1,
        company: "",
        role: "",
        start: "",
        end: "",
        description: "",
        employmentType: "",
      });
    },
    changeExperience(state, action) {
      const { id, name, value } = action.payload;
      const experience = state.find((experience) => experience.id === id);
      console.log(experience);
      if (experience) {
        experience[name] = value;
      }
    },
    removeExperience(state, action) {
      return state.filter((experience) => experience.id !== action.payload);
    },
  },
});

export const { addExperience, changeExperience, removeExperience } =
  experienceSlice.actions;

export default experienceSlice.reducer;
