import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from './api';
// to compare date time values
import moment from 'moment';

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
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },

    bugAssignedToUser: (bugs, action) => {
      const { id: bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },

    // command - event
    // bugAdded -addBug
    addBug: (bugs, action) => {
      bugs.list.push(action.payload);
    },

    // bugResolved = (command) resolveBug = (event)
    resolveBug: (bugs, action) => {
      // bugs.list.map((bug) =>
      //   bug.id !== action.payload.id ? bug : (bug.resolved = true)
      // ),
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
    removeBug: (bugs, action) => {
      bugs.list.filter((bug) => bug.id === action.payload.id);
    },
  },
});
// console.log(slice);

// Export keyword removed to reduce coupling.
// Cohesion - Things which are highly related should be together. That is why he prefers to put actions, action creators and reducers together. This reduces coupling.
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

export const loadBugs = () => (dispatch, getState) => {
  // getState().entities.bugs.lastFetch
  const { lastFetch } = getState().entities.bugs;
  console.log(lastFetch);
  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');

  if (diffInMinutes < 10) return;

  return dispatch(
    apiCallBegan({
      url,
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestFailed.type,
    })
  );
};

// action should have three steps: api call, promise resolved ? => dispatch(success) : dispatch(error )
export const bugAdded = (bug) =>
  apiCallBegan({
    url,
    method: 'post',
    data: bug,
    onSuccess: addBug.type,
  });

export const bugResolved = (id) =>
  apiCallBegan({
    url: url + '/' + id,
    method: 'patch',
    data: { resolved: true },
    onSuccess: resolveBug.type,
  });

export const assignBugToUser = (bugId, userId) =>
  apiCallBegan({
    url: url + '/' + bugId,
    method: 'patch',
    data: { userId },
    onSuccess: bugAssignedToUser.type,
  });

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  // The output of the above selectors will end up as the input of the resolved function.
  (bugs, projects) => bugs.list.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
