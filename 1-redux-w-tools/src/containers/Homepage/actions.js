// An action is a funcion that takes an argument and returns a function
import { ActionTypes } from './constants';

export const setUsers = (users) => ({
  type: ActionTypes.SET_USERS,
  payload: users,
});
