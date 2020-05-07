import { combineReducers } from 'redux'

const routines = (state = {
  items: [],
  itemsById: {},
  loading: false 
}, action) => {
  return state;
}

const workouts = (state = {
  items: [],
  itemsById: {},
  loading: false 
}, action) => {
  return state;
}

const rootReducer = combineReducers({
  routines,
  workouts
})

export default rootReducer;