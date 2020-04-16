import React from 'react';
import RoutineListItem from './RoutineListItem';

const RoutinesList = ({routines}) => {
  //console.log('routines',routines)
  return (
    <ul>
      {routines.map(routineAttributes => <RoutineListItem {...routineAttributes} />)}
    </ul>
  )
}

export default RoutinesList