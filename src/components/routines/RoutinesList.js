import React from 'react';
import RoutineListItem from './RoutineListItem';

const RoutinesList = ({routines}) => {
  //console.log('routines',routines)
  return (
    <ul>
      {routines.map(routineAttributes => 
        <RoutineListItem 
          key={routineAttributes.id} 
          {...routineAttributes}  
        />)
      }
    </ul>
  )
}

export default RoutinesList