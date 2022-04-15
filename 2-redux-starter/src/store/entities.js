import { combineReducers } from 'redux';
import bugsReducer from './bugs';
import projectsReducer from './projects';

// then import in reducer.js - this enables you work with multiple folders who have multiple reducers  in an easier and more efficient way
export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
});

// Store - Reducer - parent reducer - child reducer
// Each reducer is responsible for updating a slice of the application

// Normalization
// --learn to keeep your data in a flat state, and avoid as much nesting as possible. You can use normalizr library to normalize your data.
