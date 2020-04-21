import React, { Component } from 'react';
import RoutinesList from './RoutinesList';
import NewRoutineForm from './NewRoutineForm';
import NewWorkoutForm from './NewWorkoutForm';

class RoutinesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routines: [],
      workouts: [],
      activeForm: null,
      activeRoutine: null
    }
    this.addRoutine = this.addRoutine.bind(this)
    this.handleAddRoutineButtonClick = this.handleAddRoutineButtonClick.bind(this)
    this.handleAddWorkoutButtonClick = this.handleAddWorkoutButtonClick.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:3001/routines')
      .then(response => response.json())
      .then(routines => {
        this.setState({ routines: routines })
      })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props || nextState !== this.state
  // }

  handleAddRoutineButtonClick(e) {
    e.preventDefault();
    this.setState({
      activeForm: 'addRoutine'
    })
  }

  handleAddWorkoutButtonClick(routineId) {
    this.setState((state, props) => {
      return {
        activeForm: 'addWorkout',
        activeRoutine: state.routines.find(routine => routine.id == routineId)
      }
    })
  }

  addRoutine(routine) {
    fetch('http://localhost:3001/routines', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(routine)
    })
      .then(res => res.json())
      .then(routine => {
        debugger
        this.setState((state, props) =>{
          return {
            routines: [...state.routines, routine]
          }
        })
      })
  }
  addWorkout(workout) {
    fetch('http://localhost:3001/workouts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(workout)
    })
      .then(res => res.json())
      .then(workout => {
        debugger
        this.setState((state, props) =>{
          return {
            workouts: [...state.workouts, workout]
          }
        })
      })
  }

  render() {
    return (
      <section>
        <h3>Routines List</h3>
        <RoutinesList 
          routines={this.state.routines} 
          handleAddWorkoutClick={this.handleAddWorkoutButtonClick}
        />
        <h4>
          <button onClick={this.handleAddRoutineButtonClick}>Add Routine</button></h4>
        {this.state.activeForm === 'addRoutine' && 
          <NewRoutineForm addRoutine={this.addRoutine} /> 
        }
        {this.state.activeForm === 'addWorkout' && 
          <NewWorkoutForm 
            addWorkout={this.addWorkout} 
            routine={this.state.activeRoutine}
          /> 
        }
      </section>
    )
  }
}

export default RoutinesContainer
