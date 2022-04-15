import configureStore from './store/configureStore.js';

const store = configureStore();

// In redux, actions should be plain objects with a type property
store.dispatch((dispatch, getState) => {
  dispatch({ type: 'bugsReceived', bugs: [1, 2, 3] });
});

store.dispatch({
  type: 'error',
  payload: { message: 'An error occurred' },
});
