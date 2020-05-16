import React from 'react';
import WorkoutListItem from './WorkoutListItem';
import { ButtonLink } from '../ui';

const WorkoutList = ({workouts, routine}) => {
  const { 
    id,
    title,
    exercise_1, 
    exercise_2,
    exercise_3,
    exercise_4,
    exercise_5 
  } = routine
  return (
    <>
      <h2 className="text-3xl font-semibold">{title}</h2>
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
          {workouts.map(workout => 
            <WorkoutListItem 
              {...workout} 
            /> 
          )}
        </tbody>
      </table>
      <ButtonLink pathname={`/routines/${id}/workouts/new`}>Add Workout</ButtonLink>
    </>
  )
}

export default WorkoutList;