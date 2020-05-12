import { combineReducers } from 'redux'
import { 
  RECEIVE_ROUTINES,
  ADD_ROUTINE,
  FETCHING_WORKOUTS,
  RECEIVE_WORKOUTS,
  ADD_WORKOUT,
  FETCHING_ROUTINES
} from '../actions';

const routines = (state = {
  items: [],
  itemsById: {},
  loading: false 
}, action) => {
  switch(action.type) {
    case FETCHING_ROUTINES:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_ROUTINES:
      return {
        items: action.payload.map(routine => routine.id),
        itemsById: action.payload.reduce((idMap, routine) => {
          idMap[routine.id] = routine;
          return idMap;
        },{}),
        loading: false
      }
    case ADD_ROUTINE: 
      return {
        ...state,
        items: state.items.concat(action.payload.id),
        itemsById: {
          ...state.itemsById,
          [action.payload.id]: action.payload
        }
      }
    default:
      return state;
  }
}

const workouts = (state = {
  items: [],
  itemsById: {},
  loading: false 
}, action) => {
  switch(action.type) {
    case FETCHING_WORKOUTS:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_WORKOUTS:
      return {
        items: action.payload.map(workout => workout.id),
        itemsById: action.payload.reduce((idMap, workout) => {
          idMap[workout.id] = workout;
          return idMap;
        },{}),
        loading: false
      }
    case ADD_WORKOUT: 
      return {
        ...state,
        items: state.items.concat(action.payload.id),
        itemsById: {
          ...state.itemsById,
          [action.payload.id]: action.payload
        }
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routines,
  workouts
})

export default rootReducer;