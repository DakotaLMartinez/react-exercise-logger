import React, { Component } from 'react';
import './App.css';
import RoutinesContainer from './components/routines/RoutinesContainer';
import Navbar from './components/Navbar';
import NewRoutineForm from './components/routines/NewRoutineForm';
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
    return fetch('http://localhost:3001/routines', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(routine)
    })
      .then(res => res.json())
      .then(routine => {
        // debugger
        this.setState((state) =>{
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
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/routines">
            <RoutinesContainer routines={this.state.routines} /> 
          </Route>
          <Route path="/routines/new" render={(routerProps) => 
            <NewRoutineForm 
              addRoutine={this.addRoutine} 
              history={routerProps.history}
            />
          }>
          </Route>
          <Route path="/routines/:routineId/workouts/new" render={(routerProps) => 
            <NewWorkoutForm 
              addWorkout={this.addWorkout} 
              routine={this.state.routines.find(routine => routerProps.match.params.routineId == routine.id)}
            />
          }>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

// // import React from "react";
// // import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/mytopics">Topics</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/mytopics">
//             <Topics />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>
//       <h3>MatchUrl: {match.url} MatchPath: {match.path} </h3>
//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
