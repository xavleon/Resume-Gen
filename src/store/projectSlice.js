import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Expense Tracker",
    description:
      "This app will help you to track your income streams and expenses.",
    url: "https://github.com/TT-talhatariq/Resume-Gen",
  },
];

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, action) {
      state.push(action.payload); // Correct way to update state
    },
    removeProject(state, action) {
      return state.filter((project) => project.id !== action.payload); // Return a new state
    },
    changeProject(state, action) {
      const { id, name, value } = action.payload;
      const project = state.find((project) => project.id === id);
      if (project) {
        project[name] = value;
      }
    },
  },
});

export const { addProject, removeProject, changeProject } =
  projectSlice.actions;

export default projectSlice.reducer;
