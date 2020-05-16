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
        {this.props.routines.map(routine =>(
          <WorkoutList 
            workouts={this.props.workouts.filter(workout => workout.routine_id == routine.id)}
            routine={routine}
          />
        ))}
        {/* <WorkoutList 
          workouts={this.props.workouts}
          routine={this.props.routines[0]}
        /> */}
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