import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import api from './middleware/api';
// import func from './middleware/func';
import logger from './middleware/logger';
import toast from './middleware/toast';
import reducer from './reducer';

// Using redux toolkit
// This creates your store
// console.log(getDefaultMiddleware);
export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: 'console' }),
      toast,
      api,
      // func,
    ],
  });
}

// BENEFITS
// Dispatch Asynchornus actions
// Connects directly to the redux dev tools

// if you're not using redux toolkit, you'll import applyMiddleware from redux and add it in the createStore function(applyMiddleware(logger))
