import React from 'react';

const RoutineListItem = ({id, title, exercise_1, exercise_2, exercise_3, exercise_4, exercise_5, handleAddWorkoutClick}) => {
  return (
    <li>
      {title} - {exercise_1}, {exercise_2}, {exercise_3}, {exercise_4}, {exercise_5} <button onClick={(e) => handleAddWorkoutClick(id)}>Add Workout</button>
    </li>
  )
}

export default RoutineListItem