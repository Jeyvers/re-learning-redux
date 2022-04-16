import configureStore from './store/configureStore.js';

import { loadBugs } from './store/bugs.js';
const store = configureStore();

// In redux, actions should be plain objects with a type property
store.dispatch(loadBugs());

// Strings are serializable, functions aren't
