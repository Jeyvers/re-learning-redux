import { addBug, resolveBug } from './actions';
import store from './store.js';

store.dispatch(addBug('Bug 1'));
store.dispatch(resolveBug(1));
console.log(store.getState());
