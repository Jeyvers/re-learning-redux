// Not really bad in this case to import all as actions. In bigger applications, rememeber to change this.
import * as actions from './store/bugs';

import configureStore from './store/configureStore.js';

const store = configureStore();
store.subscribe(() => {
  console.log('store changed');
});
store.dispatch(actions.addBug('Bug 1'));
store.dispatch(actions.addBug('Bug 2'));
store.dispatch(actions.addBug('Bug 3'));
store.dispatch(actions.resolveBug(1));
// console.log(store.getState());
