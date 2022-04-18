import { bugAdded, addBug } from '../bugs';
import * as actions from '../api';

describe('bugsSlice', () => {
  describe('action creators', () => {
    it('addBug', () => {
      const bugDescription = { description: 'a' };
      const result = bugAdded(bugDescription);
      const expected = {
        type: actions.apiCallBegan.type,
        payload: {
          url: '/bugs',
          method: 'post',
          data: bugDescription,
          onSuccess: addBug.type,
        },
      };
      expect(result).toEqual(expected);
    });
  });
});
