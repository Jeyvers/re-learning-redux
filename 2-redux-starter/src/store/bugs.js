import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

// Creates the actions and the reducers
const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    // An object that maps actions to action handlers

    // addBug is no longer an object but the name of the property which will create action types and reducers
    addBug: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    resolveBug: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index] = true;
    },

    removeBug: (bugs, action) => {
      bugs.filter((bug) => bug.id === action.payload.id);
    },
  },
});
// console.log(slice);

export const { addBug, resolveBug, removeBug } = slice.actions;
export default slice.reducer;
