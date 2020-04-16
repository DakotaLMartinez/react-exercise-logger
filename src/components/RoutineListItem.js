import React from 'react';

const RoutineListItem = ({title, exercise_1, exercise_2, exercise_3, exercise_4, exercise_5}) => {
  return (
    <li>
      {title} - {exercise_1}, {exercise_2}, {exercise_3}, {exercise_4}, {exercise_5}
    </li>
  )
}

export default RoutineListItem