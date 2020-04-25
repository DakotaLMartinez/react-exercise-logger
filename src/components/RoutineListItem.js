import React from 'react';
import { Link } from 'react-router-dom';

const RoutineListItem = ({id, title, exercise_1, exercise_2, exercise_3, exercise_4, exercise_5}) => {
  return (
    <li>
      {title} - {exercise_1}, {exercise_2}, {exercise_3}, {exercise_4}, {exercise_5} 
      <Link to={{
        pathname: `/routines/${id}/workouts/new`
      }}>
        Add Workout
      </Link>
    </li>
  )
}

export default RoutineListItem