import React, { Component } from 'react';
import './App.css';
import RoutinesContainer from './components/routines/RoutinesContainer';
import Navbar from './components/Navbar';
import NewRoutineForm from './components/routines/NewRoutineForm';
import WorkoutsContainer from './components/workouts/WorkoutsContainer';
import NewWorkoutForm from './components/workouts/NewWorkoutForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      routines: [],
      workouts: [],
      loading: true
    }
    this.addWorkout = this.addWorkout.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:3001/routines')
      .then(response => response.json())
      .then(routines => {
        this.setState({ routines: routines })
      })
    fetch('http://localhost:3001/workouts')
      .then(response => response.json())
      .then(workouts => {
        this.setState({ workouts: workouts, loading: false })
      })
  }


  addWorkout(workout) {
    return fetch('http://localhost:3001/workouts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(workout)
    })
      .then(res => res.json())
      .then(workout => {
        this.setState((state, props) =>{
          return {
            workouts: [...state.workouts, workout]
          }
        })
      })
  }

  render() {
    if(this.state.loading) {
      return <div>Loading...</div>
    }
    return (
      <Router>
        <Navbar />
        <div className="w-5/6 mx-auto">
          <Switch>
            <Route exact path="/routines">
              <RoutinesContainer routines={this.state.routines} /> 
            </Route>
            <Route path="/routines/new" render={(routerProps) => 
              <NewRoutineForm 
                history={routerProps.history}
              />
            }>
            </Route>
            <Route path="/routines/:routineId/workouts/new" render={(routerProps) => 
              <NewWorkoutForm 
                addWorkout={this.addWorkout} 
                routine={this.state.routines.find(routine => routerProps.match.params.routineId == routine.id)}
                history={routerProps.history}
              />
            }>
            </Route>
            <Route exact path="/workouts">
              <WorkoutsContainer 
                workouts={this.state.workouts} 
                routines={this.state.routines}
              /> 
            </Route>
          </Switch>
        </div>
        
      </Router>
    );
  }
}

export default App;

