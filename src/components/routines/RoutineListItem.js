import React from 'react';
import { Link } from 'react-router-dom';

const RoutineListItem = ({id, title, exercise_1, exercise_2, exercise_3, exercise_4, exercise_5}) => {
  return (
    <li className="my-2">
      {title} - {exercise_1}, {exercise_2}, {exercise_3}, {exercise_4}, {exercise_5} 
      <Link className="ml-1 inline-block bg-green-600 px-2 py-1 rounded" to={{
        pathname: `/routines/${id}/workouts/new`
      }}>
        Add Workout
      </Link>
    </li>
  )
}

export default RoutineListItem