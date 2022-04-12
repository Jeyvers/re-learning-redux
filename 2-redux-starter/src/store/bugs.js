import { createAction, createReducer } from '@reduxjs/toolkit';

// Creates your actions, obviously
export const addBug = createAction('addBug');
export const resolveBug = createAction('resolveBug');
export const removeBug = createAction('removeBug');

// Reducers
let lastId = 0;

// Recall to export as default, else the store is null
// First parameter = initial state.
export default createReducer([], {
  // key: value
  // actions: functions (event => event handler)

  //   the state parameter has been renamed to bugs

  //   Type of action must equal name of reducer

  [addBug.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },

  [resolveBug.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index] = true;
  },

  [removeBug.type]: (bugs, action) => {
    bugs.filter((bug) => bug.id === action.payload.id);
  },
});

// DUCK'S PATTERN RULES
/*
 - Reducer must be a default export
 - Export Individual action creators
 - No need to export action types 

*/
