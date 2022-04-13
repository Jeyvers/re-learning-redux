import configureStore from './store/configureStore.js';
import { addProject } from './store/projects.js';
import * as actions from './store/bugs';

const store = configureStore();
store.subscribe(() => {
  console.log('store changed');
});

store.dispatch(actions.addBug({ description: 'Bug 1' }));
store.dispatch(addProject({ description: 'Project 1' }));

// Is it okay to store all state or global state in your redux application?

// 1.  Store Global State; Benefits:
// a. Easy to implement
// All State; Benefits:
// a. Unified Data
// b. Cacheability
// c. Easier Debugging
// d. More testability

// Exception: Form State. Why? - Temporary Values, - Too many dispatches, - Harder debugging
