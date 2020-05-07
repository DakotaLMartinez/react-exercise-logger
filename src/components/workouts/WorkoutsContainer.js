import React, { Component } from 'react';
import WorkoutList from './WorkoutList';

class WorkoutsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="workouts">
        <h4 className="text-2xl bold">Workouts</h4>
        <WorkoutList 
          workouts={this.props.workouts}
          routines={this.props.routines}
        />
      </section>
    )
  }
}

export default WorkoutsContainer;