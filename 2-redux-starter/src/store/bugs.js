import { createAction } from '@reduxjs/toolkit';

export const addBug = createAction('addBug');
export const resolveBug = createAction('resolveBug');
export const removeBug = createAction('removeBug');

// Reducers
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    //   It is not just addBug because you're creating an action, and setting the type in one module. So the type which is 'addBug' is what we are accesing.
    // Refer to previous commit histories to see difference
    case addBug.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case removeBug.type:
      return state.filter((bug) => bug.id !== action.payload.id);

    case resolveBug.type:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}

// DUCK'S PATTERN RULES
/*
 - Reducer must be a default export
 - Export Individual action creators
 - No need to export action types 

*/
