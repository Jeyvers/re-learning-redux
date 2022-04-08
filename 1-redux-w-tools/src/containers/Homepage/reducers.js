import { ActionTypes } from './constants';

const defaultState = {
  users: [],
};

// How a reducer looks like
// A store is a combination of reducers. A special function that comes from the library combines them together. Always put the store in the highest level.
// "It's advisable that every major page or feature has its own reducer.""
export default function homePageReducer(state = defaultState, action) {
  // Checks action.type
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
