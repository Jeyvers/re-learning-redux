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
