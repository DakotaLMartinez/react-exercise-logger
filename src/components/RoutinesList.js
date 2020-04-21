import React from 'react';
import RoutineListItem from './RoutineListItem';

const RoutinesList = ({routines, handleAddWorkoutClick}) => {
  //console.log('routines',routines)
  return (
    <ul>
      {routines.map(routineAttributes => <RoutineListItem {...routineAttributes} handleAddWorkoutClick={handleAddWorkoutClick} />)}
    </ul>
  )
}

export default RoutinesList