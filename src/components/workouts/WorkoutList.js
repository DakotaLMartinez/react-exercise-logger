import React from 'react';
import WorkoutListItem from './WorkoutListItem';

const WorkoutList = ({workouts, routines}) => {
  return (
    <ul id="workoutList">
      {workouts.map(workout => 
        <WorkoutListItem 
          {...workout} 
          routine={routines.find(routine => routine.id === workout.routine_id)}
        /> 
      )}
    </ul>
  )
}

export default WorkoutList;