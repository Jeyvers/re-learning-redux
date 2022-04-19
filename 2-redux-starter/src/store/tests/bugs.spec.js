import { bugAdded, addBug } from '../bugs';
import * as actions from '../api';
import configureStore from '../configureStore';

describe('bugsSlice', () => {
  it('should handle the addBug action', async () => {
    const store = configureStore();
    const bugObject = { description: 'a' };
    store.dispatch(addBug(bugObject));
    expect(store.getState().entities.bugs.list).toHaveLength(1);

    //   const result = bugAdded(bugDescription);
    //   const expected = {
    //     type: actions.apiCallBegan.type,
    //     payload: {
    //       url: '/bugs',
    //       method: 'post',
    //       data: bugDescription,
    //       onSuccess: addBug.type,
    //     },
    //   };
    //   expect(result).toEqual(expected);
  });
});
