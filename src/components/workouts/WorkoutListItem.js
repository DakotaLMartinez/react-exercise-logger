import React from 'react';

const WorkoutListItem = (props) => {
  const {
    date,
    name,
    exercise_1_notes,
    exercise_2_notes,
    exercise_3_notes,
    exercise_4_notes,
    exercise_5_notes,
  } = props
  return (
    <tr>
      <td colSpan="3">{date}</td>
      <td colSpan="3">{name}</td>
      <td colSpan="3">{exercise_1_notes}</td>
      <td colSpan="3">{exercise_2_notes}</td>
      <td colSpan="3">{exercise_3_notes}</td>
      <td colSpan="3">{exercise_4_notes}</td>
      <td colSpan="3">{exercise_5_notes}</td>
    </tr>
  )
}

export default WorkoutListItem;