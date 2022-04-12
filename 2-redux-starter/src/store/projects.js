import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    addProject: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.description,
      });
    },
  },
});

export const { addProject } = slice.actions;
export default slice.reducer;
console.log(createSlice);
