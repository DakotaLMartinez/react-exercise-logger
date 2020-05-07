import { combineReducers } from 'redux'
import { 
  RECEIVE_ROUTINES,
  ADD_ROUTINE,
  FETCH_WORKOUTS,
  RECEIVE_WORKOUTS,
  ADD_WORKOUT
} from '../actions';

const routines = (state = {
  items: [],
  itemsById: {},
  loading: false 
}, action) => {
  switch(action.type) {
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
  return state;
}

const rootReducer = combineReducers({
  routines,
  workouts
})

export default rootReducer;