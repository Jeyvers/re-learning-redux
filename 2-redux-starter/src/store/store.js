import { createStore } from 'redux';
import reducer from './bugs';
import { devToolsEnhancer } from 'redux-devtools-extension';
const store = createStore(reducer, devToolsEnhancer({ trace: true }));
export default store;
