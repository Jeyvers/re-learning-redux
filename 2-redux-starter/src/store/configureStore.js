import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

// Using redux toolkit
// This creates your store
export default function () {
  return configureStore({ reducer });
}

// BENEFITS
// Dispatch Asynchornus actions
// Connects directly to the redux dev tools
