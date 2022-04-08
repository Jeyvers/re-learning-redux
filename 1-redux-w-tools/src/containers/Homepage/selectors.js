import { createSelector } from 'reselect';
// (state.) name should be the same with combined reducer reducer names used in the store.
const homePageState = (state) => state.homePage;

// make is a naming convention for selectors
// Normal way export const makeSelectUsers = homePage(state).users =>
// Using reselector is not mandatory but is the 'best' coding convention - good practice - in the redux community.
export const makeSelectUsers = createSelector(
  homePageState,
  (homePage) => homePage.users
);
