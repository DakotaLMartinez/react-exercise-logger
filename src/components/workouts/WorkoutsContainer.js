import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWorkouts, fetchRoutines } from '../../actions';
import WorkoutList from './WorkoutList';

class WorkoutsContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRoutines();
    this.props.fetchWorkouts();
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

const mapStateToProps = ({ workouts, routines }) => {
  const workoutsById = workouts.itemsById;
  const routinesById = routines.itemsById;
  return {
    workouts: workouts.items.map(workoutId => workoutsById[workoutId]), 
    routines: routines.items.map(routineId => routinesById[routineId])
  }
}

export default connect(mapStateToProps, { fetchWorkouts, fetchRoutines })(WorkoutsContainer);