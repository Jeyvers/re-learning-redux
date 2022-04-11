import reducer from './reducer';
function createStore(reducer) {
  // state in createStore is not exposed
  let state;

  let listeners = [];

  function subscribe(listener) {
    console.log('First listenere:', listener);
    listeners.push(listener);
    console.log('Listener:', listener, 'Listeners:', listeners);
  }

  function dispatch(action) {
    //   Call the reducer to get the new sstate
    state = reducer(state, action);
    console.log('Action:', action);
    for (let i = 0; i < listeners.length; i++) listeners[i]();
  }

  function getState() {
    return state;
  }
  return { getState, dispatch, subscribe };
}

export default createStore(reducer);
