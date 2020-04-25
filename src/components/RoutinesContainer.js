import React, { Component } from 'react';
import RoutinesList from './RoutinesList';
import NewRoutineForm from './NewRoutineForm';
import NewWorkoutForm from './NewWorkoutForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class RoutinesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routines: [],
      workouts: [],
      loading: true
    }
    this.addRoutine = this.addRoutine.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:3001/routines')
      .then(response => response.json())
      .then(routines => {
        this.setState({ routines: routines, loading: false })
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

  renderLoadedContent() {
    return (
      <React.Fragment>
        <RoutinesList 
          routines={this.state.routines} 
          handleAddWorkoutClick={this.handleAddWorkoutButtonClick}
        />
        <h4>
          <Link to="/routines/new">Add Routines</Link>
        </h4>
        <Switch>
          <Route path="/routines/new">
            <NewRoutineForm addRoutine={this.addRoutine} />
          </Route>
          <Route path="/routines/:routineId/workouts/new" render={(routerProps) => 
            <NewWorkoutForm 
              addWorkout={this.addWorkout} 
              routine={this.state.routines.find(routine => routerProps.match.params.routineId == routine.id)}
            />
          }>
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
  render() {
    return (
      <section>
        <h3>Routines List</h3>
        {this.state.loading ? 'Loading...' : this.renderLoadedContent()}
      </section>
    )
  }
}

export default RoutinesContainer
