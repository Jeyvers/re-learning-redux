import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from './api';
let lastId = 0;

// Creates the actions and the reducers
const slice = createSlice({
  // name of the state, the initialState & the reducers
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },

    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },

    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
    },

    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },

    addBug: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    resolveBug: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },

    removeBug: (bugs, action) => {
      bugs.list.filter((bug) => bug.id === action.payload.id);
    },
  },
});
// console.log(slice);

export const {
  addBug,
  resolveBug,
  removeBug,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed,
} = slice.actions;

export default slice.reducer;

// Action Creators
const url = '/bugs';
export const loadBugs = () =>
  apiCallBegan({
    url,
    onStart: bugsRequested.type,
    onSuccess: bugsReceived.type,
    onError: bugsRequestFailed.type,
  });

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  // The output of the above selectors will end up as the input of the resolved function.
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
