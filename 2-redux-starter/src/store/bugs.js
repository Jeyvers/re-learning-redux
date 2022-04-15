import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
let lastId = 0;

// Creates the actions and the reducers
const slice = createSlice({
  // name of the state, the initialState & the reducers
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

// Selector : takes the state and returns a computed state
// export const getUnresolvedBugs = (state) => {
//   state.entities.bugs.filter((bug) => !bug.resolved);
// };

// 0.5
// Memoization
// f(x) => y {input: 1, output: 2}
// bugs => get unresolved bugs from the cache
export const getUnresolvedBugs = createSelector(
  // You can pass multiple selectors and seperate them with a comma
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  // The output of the above selectors will end up as the input of the resolved function.
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);
