import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bugResolved, getUnresolvedBugs, loadBugs } from '../store/bugs';

const BugsList = () => {
  //   console.log(props);

  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
    // props.loadBugs();
  }, []);

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>
          {bug.description}
          <button onClick={() => dispatch(bugResolved(bug.id))}>Resolve</button>
        </li>
      ))}
    </ul>
  );
};

export default BugsList;

// interest: state.entitties.bugs.list
// const mapStateToProps = (state) => ({ bugs: state.entities.bugs.list });

// const mapDispatchToProps = (dispatch) => ({
//   loadBugs: () => dispatch(loadBugs()),
// });

// // Container
// // Presentation (Bugs)
// export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
