import { configureStore } from '@reduxjs/toolkit';
import reducer from './bugs';

// Using redux toolkit
export default function () {
  return configureStore({ reducer });
}

// BENEFITS
// Dispatch Asynchornus actions
// Connects directly to the redux dev tools
