import configureStore from './store/configureStore.js';

import { loadBugs, bugAdded } from './store/bugs.js';
const store = configureStore();

// In redux, actions should be plain objects with a type property
store.dispatch(bugAdded({ description: 'a' }));

// Strings are serializable, functions aren't
