// Action Types
const ADD_BUG = 'ADD_BUG';
const REMOVE_BUG = 'REMOVE_BUG';
const RESOLVE_BUG = 'RESOLVE_BUG';

// Action Creators
export const addBug = (description) => ({
  type: ADD_BUG,
  payload: {
    description,
  },
});

export const resolveBug = (id) => ({
  type: RESOLVE_BUG,
  payload: {
    id,
  },
});

// Reducers
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_BUG:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case REMOVE_BUG:
      return state.filter((bug) => bug.id !== action.payload.id);

    case RESOLVE_BUG:
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
