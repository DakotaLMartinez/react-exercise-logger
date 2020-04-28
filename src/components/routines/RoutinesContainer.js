import React, { Component } from 'react';
import RoutinesList from './RoutinesList';

import {
  Link
} from "react-router-dom";

class RoutinesContainer extends Component {

  constructor(props) {
    super(props);
    this.renderLoadedContent = this.renderLoadedContent.bind(this)
  }

  renderLoadedContent() {
    return (
      <React.Fragment>
        <RoutinesList 
          routines={this.props.routines} 
          handleAddWorkoutClick={this.handleAddWorkoutButtonClick}
        />
        <h4>
          <Link to="/routines/new">Add Routines</Link>
        </h4>
      </React.Fragment>
    )
  }
  render() {
    return (
      <section>
        <h3>Routines List</h3>
        {this.props.loading ? 'Loading...' : this.renderLoadedContent()}
      </section>
    )
  }
}

export default RoutinesContainer
