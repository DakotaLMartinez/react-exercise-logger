export const FETCH_ROUTINES = "FETCH_ROUTINES"
export const RECEIVE_ROUTINES = "RECEIVE_ROUTINES"
export const ADD_ROUTINE = "ADD_ROUTINE"
export const FETCH_WORKOUTS = "FETCH_WORKOUTS"
export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS"
export const ADD_WORKOUT = "ADD_WORKOUT"

export const addRoutine = routine => {
  return fetch('http://localhost:3001/routines', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(routine)
    })
      .then(res => res.json())
}