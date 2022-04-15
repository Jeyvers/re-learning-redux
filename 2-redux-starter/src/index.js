import configureStore from './store/configureStore.js';
import { addProject } from './store/projects.js';
import { addBug, resolveBug, getUnresolvedBugs } from './store/bugs';

const store = configureStore();
store.subscribe(() => {
  console.log('store changed');
});

store.dispatch(addProject({ description: 'Project 1' }));
store.dispatch(addBug({ description: 'Bug 1' }));
store.dispatch(addBug({ description: 'Bug 2' }));
store.dispatch(addBug({ description: 'Bug 3' }));
store.dispatch(resolveBug({ id: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState());

console.log(unresolvedBugs);
console.log(store.getState());

// Is it okay to store all state or global state in your redux application?

// 1.  Store Global State; Benefits:
// a. Easy to implement
// All State; Benefits:
// a. Unified Data
// b. Cacheability
// c. Easier Debugging
// d. More testability

// Exception: Form State. Why? - Temporary Values, - Too many dispatches, - Harder debugging
