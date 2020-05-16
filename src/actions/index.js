export const FETCHING_ROUTINES = "FETCHING_ROUTINES"
export const RECEIVE_ROUTINES = "RECEIVE_ROUTINES"
export const ADD_ROUTINE = "ADD_ROUTINE"
export const FETCHING_WORKOUTS = "FETCHING_WORKOUTS"
export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS"
export const ADD_WORKOUT = "ADD_WORKOUT"

export const addRoutine = routine => {
  return dispatch => {
    return fetch('http://localhost:3001/routines', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(routine)
      })
        .then(res => res.json())
        .then(routine => {
          dispatch({
            type: ADD_ROUTINE,
            payload: routine
          })
        })
  }
}

export const fetchRoutines = () => {
  console.log('b')
  return dispatch => {
    console.log('c')
    dispatch({ type: FETCHING_ROUTINES })
    fetch('http://localhost:3001/routines')
      .then(res => res.json()) 
      .then(routines => {
        console.log('d')
        dispatch({
          type: RECEIVE_ROUTINES, 
          payload: routines
        })
      })   
  }
  console.log('e')  
}

export const fetchRoutine = (routineId) => {
  return dispatch => {
    dispatch({ type: FETCHING_ROUTINES })
    return fetch(`http://localhost:3001/routines/${routineId}`)
      .then(res => res.json()) 
      .then(routine => {
        console.log('d')
        dispatch({
          type: RECEIVE_ROUTINES, 
          payload: [routine]
        })
      })  
  } 
}

export const addWorkout = workout => {
  return dispatch => {
    return fetch('http://localhost:3001/workouts', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(workout)
      })
        .then(res => res.json())
        .then(workout => {
          dispatch({
            type: ADD_WORKOUT,
            payload: workout
          })
        })
  }
}

export const fetchWorkouts = () => {
  return dispatch => {
    dispatch({type: FETCHING_WORKOUTS})
    fetch('http://localhost:3001/workouts')
      .then(res => res.json())
      .then(workouts => {
        dispatch({
          type: RECEIVE_WORKOUTS, 
          payload: workouts
        })
      })
  }
}

