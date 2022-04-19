import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';

import StoreContext from '../contexts/storeContext';
import bugs, { loadBugs } from '../store/bugs';

const Bugs = () => {
  const store = useContext(StoreContext);
  const [state, setState] = useState({ bugs: [] });
  //   const contextType =

  useEffect(() => {
    console.log(store);
    const unsubscribe = store.subscribe(() => {
      const bugsInStore = store.getState().entities.bugs.list;
      if (state.bugs !== bugsInStore) setState({ bugs: bugsInStore });
    });

    store.dispatch(loadBugs());

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <ul>
      {state.bugs.map((bug) => (
        <li key={bug.id}>{bug.description}</li>
      ))}
    </ul>
  );
};

export default Bugs;
