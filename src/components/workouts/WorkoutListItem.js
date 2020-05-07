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
    routine: {
      exercise_1,
      exercise_2,
      exercise_3,
      exercise_4,
      exercise_5
    }
  } = props
  return (
    <table className="table-fixed my-6">
      <thead>
        <tr>
          <th className="w-1/12" colSpan="3">Date</th>
          <th className="w-1/12" colSpan="3">Name</th>
          <th className="w-1/6" colSpan="3">{exercise_1}</th>
          <th className="w-1/6" colSpan="3">{exercise_2}</th>
          <th className="w-1/6" colSpan="3">{exercise_3}</th>
          <th className="w-1/6" colSpan="3">{exercise_4}</th>
          <th className="w-1/6" colSpan="3">{exercise_5}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="3">{date}</td>
          <td colSpan="3">{name}</td>
          <td colSpan="3">{exercise_1_notes}</td>
          <td colSpan="3">{exercise_2_notes}</td>
          <td colSpan="3">{exercise_3_notes}</td>
          <td colSpan="3">{exercise_4_notes}</td>
          <td colSpan="3">{exercise_5_notes}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default WorkoutListItem;