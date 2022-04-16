import configureStore from './store/configureStore.js';

import { loadBugs, bugResolved, bugAdded } from './store/bugs.js';
const store = configureStore();

// In redux, actions should be plain objects with a type property
store.dispatch(bugAdded({ description: 'a' }));

store.dispatch(loadBugs());
setTimeout(() => store.dispatch(bugResolved(1)), 2000);

// Strings are serializable, functions aren't
