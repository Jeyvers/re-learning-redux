import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  bugResolved,
  getUnresolvedBugs,
  loadBugs,
  resolveBug,
} from '../store/bugs';

class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}
            <button onClick={() => this.state.dispatch(bugResolved(bug.id))}>
              Resolve
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

// interest: state.entities.bugs.list, takes the state and returns an object.
const mapStateToProps = (state) => ({ bugs: getUnresolvedBugs(state) });

// for dispatching actions
const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: (id) => dispatch(bugResolved(id)),
});

// Container - the component that is returned from the expression
// Presentation component - (Bugs)
// Connect is a higher order function.
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
