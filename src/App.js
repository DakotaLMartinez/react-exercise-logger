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
  Route
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Navbar />
      <div className="w-5/6 mx-auto">
        <Switch>
          <Route exact path="/routines">
            <RoutinesContainer /> 
          </Route>
          <Route path="/routines/new" render={(routerProps) => 
            <NewRoutineForm 
              history={routerProps.history}
            />
          }>
          </Route>
          <Route path="/routines/:routineId/workouts/new" render={(routerProps) => 
            <NewWorkoutForm 
              routineId={routerProps.match.params.routineId}
              history={routerProps.history}
            />
          }>
          </Route>
          <Route exact path="/workouts">
            <WorkoutsContainer /> 
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}


export default App;

