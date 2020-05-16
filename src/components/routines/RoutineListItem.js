import React from 'react';
import { ButtonLink } from '../ui';

const RoutineListItem = ({id, title, exercise_1, exercise_2, exercise_3, exercise_4, exercise_5}) => {
  return (
    <li className="my-2">
      {title} - {exercise_1}, {exercise_2}, {exercise_3}, {exercise_4}, {exercise_5} 
      <ButtonLink pathname={`/routines/${id}/workouts/new`}>
        Add Workout
      </ButtonLink>
    </li>
  )
}

export default RoutineListItem