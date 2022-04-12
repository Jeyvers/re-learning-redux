import configureStore from './store/configureStore.js';
import { addProject } from './store/projects.js';

const store = configureStore();
store.subscribe(() => {
  console.log('store changed');
});

store.dispatch(addProject({ description: 'Project 1' }));
