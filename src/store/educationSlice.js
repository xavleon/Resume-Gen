import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    degree: "BSc in Computer Science",
    type: "Bachelor",
    start: "2018",
    end: "2021",
    grade: "First Class",
  },
];

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation(state) {
      state.push({
        id: state.length + 1,
        degree: "",
        type: "",
        start: "",
        end: "",
        grade: "",
      });
    },
    changeEducation(state, action) {
      console.log(action.payload);
      const { id, name, value } = action.payload;
      const education = state.find((education) => education.id === id);
      if (education) {
        education[name] = value;
      }
    },
    removeEducation(state, action) {
      return state.filter((education) => education.id !== action.payload); // Return a new state
    },
  },
});

export const { addEducation, changeEducation, removeEducation } =
  educationSlice.actions;

export default educationSlice.reducer;
