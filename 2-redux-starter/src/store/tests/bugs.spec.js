import {
  bugAdded,
  addBug,
  getUnresolvedBugs,
  bugResolved,
  bugsReceived,
  resolveBug,
  loadBugs,
} from '../bugs';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import * as actions from '../api';
import configureStore from '../configureStore';

describe('bugsSlice', () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore();
  });

  const bugsSlice = () => store.getState().entities.bugs;

  const createState = () => ({
    entities: {
      bugs: {
        list: [],
      },
    },
  });

  describe('loading bugs', () => {
    describe('if the bugs exist in the cache', () => {
      it('should come from the cache not the server', async () => {
        fakeAxios.onGet('/bugs').reply(200, [{ id: 1 }]);
        await store.dispatch(loadBugs());
        await store.dispatch(loadBugs());

        expect(fakeAxios.history.get.length).toBe(1);
      });
    });

    describe("if the bugs don't exist in the cache", () => {
      it(' should be fetched from the server ', async () => {
        fakeAxios.onGet('/bugs').reply(200, [{ id: 1 }]);
        await store.dispatch(loadBugs());
        expect(bugsSlice().list).toHaveLength(1);
      });

      describe('loading indicator', () => {
        it('should be true while fetching the bugs', () => {
          fakeAxios.onGet('/bugs').reply(() => {
            expect(bugsSlice().loading).toBe(true);
            return [200, [{ id: 1 }]];
          });
          store.dispatch(loadBugs());
        });

        it('should be false after the bugs are fetched', async () => {
          fakeAxios.onGet('/bugs').reply(200, [{ id: 1 }]);
          await store.dispatch(loadBugs());

          expect(bugsSlice().loading).toBe(false);
        });

        it('should be false if the server returns an error ', async () => {
          fakeAxios.onGet('/bugs').reply(500);
          await store.dispatch(loadBugs());

          expect(bugsSlice().loading).toBe(false);
        });
      });
    });
  });

  it("should mark the bug as resolved if it's saved to the server", async () => {
    fakeAxios.onPatch('/bugs/1').reply(200, { id: 1, resolved: true });
    fakeAxios.onPost('/bugs').reply(200, { id: 1 });

    await store.dispatch(bugAdded({}));
    await store.dispatch(bugResolved(1));

    expect(bugsSlice().list[0].resolved).toBe(true);
  });

  it("should not mark the bug as resolved if it's not saved to the server", async () => {
    fakeAxios.onPatch('/bugs/1').reply(500);
    fakeAxios.onPost('/bugs').reply(200, { id: 1 });

    await store.dispatch(bugAdded({}));
    await store.dispatch(bugResolved(1));

    expect(bugsSlice().list[0].resolved).not.toBe(true);
  });

  it("should add the bug to the store if it's saved to the server", async () => {
    const bug = { description: 'a' };
    const savedBug = { ...bug, id: 1 };
    fakeAxios.onPost('/bugs').reply(200, savedBug);

    await store.dispatch(bugAdded(bug));

    expect(bugsSlice().list).toContainEqual(savedBug);

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

  it("should not add the bug to the store if it's not saved to the server", async () => {
    const bug = { description: 'a' };

    fakeAxios.onPost('/bugs').reply(500);

    await store.dispatch(bugAdded(bug));

    expect(bugsSlice().list).toHaveLength(0);
  });

  describe('selectors', () => {
    it('getUnresolvedBugs', () => {
      const state = createState();
      state.entities.bugs.list = [
        { id: 1, resolved: true },
        { id: 2 },
        { id: 3 },
      ];

      const result = getUnresolvedBugs(state);

      expect(result).toHaveLength(2);
    });
  });
});
