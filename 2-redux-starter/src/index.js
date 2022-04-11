import store from './store.js';
import * as actions from './store/actions';
store.subscribe(() => {
  console.log('store changed');
});
store.dispatch(actions.addBug('Bug 1'));
store.dispatch(actions.addBug('Bug 2'));
store.dispatch(actions.addBug('Bug 3'));
store.dispatch(actions.resolveBug(1));
// console.log(store.getState());
