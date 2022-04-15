import configureStore from './store/configureStore.js';
import { addProject } from './store/projects.js';
import {
  addBug,
  resolveBug,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
} from './store/bugs';
import { addUser } from './store/users.js';

const store = configureStore();
store.subscribe(() => {
  console.log('store changed');
});

store.dispatch(addUser({ name: 'User 1' }));
// store.dispatch(addUser({ name: 'User 2' }));
// store.dispatch(addProject({ description: 'Project 1' }));
// store.dispatch(addBug({ description: 'Bug 1' }));
// store.dispatch(addBug({ description: 'Bug 2' }));
// store.dispatch(addBug({ description: 'Bug 3' }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
store.dispatch(resolveBug({ id: 1 }));
// const unresolvedBugs = getUnresolvedBugs(store.getState());
const bugs = getBugsByUser(1)(store.getState());
console.log(bugs);

// Is it okay to store all state or global state in your redux application?

// 1.  Store Global State; Benefits:
// a. Easy to implement
// All State; Benefits:
// a. Unified Data
// b. Cacheability
// c. Easier Debugging
// d. More testability

// Exception: Form State. Why? - Temporary Values, - Too many dispatches, - Harder debugging

// Exercise
/*
Add the ability to 
- assign a bug to a team member
- get the list of bugs assigned to a team member
*/

// Steps to achieving exercise
/*
Create a slice for users . {id, name}
Create an action for adding a user.
Create an action for assigning a bug to a user 
Create a selector for getting bugs by a user
*/
