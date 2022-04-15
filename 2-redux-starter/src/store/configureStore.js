import { configureStore } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import reducer from './reducer';

// Using redux toolkit
// This creates your store
export default function () {
  return configureStore({
    reducer,
    middleware: [logger({ destination: 'console' })],
  });
}

// BENEFITS
// Dispatch Asynchornus actions
// Connects directly to the redux dev tools

// if you're not using redux toolkit, you'll import applyMiddleware from redux and add it in the createStore function(applyMiddleware(logger))
