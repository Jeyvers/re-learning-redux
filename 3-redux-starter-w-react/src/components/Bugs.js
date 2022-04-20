import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  bugResolved,
  getUnresolvedBugs,
  loadBugs,
  resolveBug,
} from '../store/bugs';

const Bugs = (props) => {
  useEffect(() => {
    props.loadBugs();
  }, []);

  return (
    <ul>
      {props.bugs.map((bug) => (
        <li key={bug.id}>
          {bug.description}{' '}
          <button onClick={() => props.resolveBug(bug.id)}>Resolve</button>
        </li>
      ))}
    </ul>
  );
};

// interest: state.entitties.bugs.list
const mapStateToProps = (state) => ({ bugs: getUnresolvedBugs(state) });

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: (id) => dispatch(bugResolved(id)),
});

// Container
// Presentation (Bugs)
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
