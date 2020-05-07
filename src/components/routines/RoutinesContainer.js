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
          <Link className="text-2xl bold" to="/routines/new">Add Routines</Link>
        </h4>
      </React.Fragment>
    )
  }
  render() {
    return (
      <section>
        <h4 className="text-3xl bold">Routines</h4>
        {this.props.loading ? 'Loading...' : this.renderLoadedContent()}
      </section>
    )
  }
}

export default RoutinesContainer
