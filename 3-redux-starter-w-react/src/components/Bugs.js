import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadBugs } from '../store/bugs';

const Bugs = (props) => {
  console.log(props);

  useEffect(() => {
    props.loadBugs();
  }, []);

  return (
    <ul>
      {props.bugs.map((bug) => (
        <li key={bug.id}>{bug.description}</li>
      ))}
    </ul>
  );
};

// interest: state.entitties.bugs.list
const mapStateToProps = (state) => ({ bugs: state.entities.bugs.list });

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
});

// Container
// Presentation (Bugs)
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
