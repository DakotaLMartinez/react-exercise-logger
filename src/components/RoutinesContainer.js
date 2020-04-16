import React, { Component } from 'react';
import RoutinesList from './RoutinesList';
import NewRoutineForm from './NewRoutineForm';

class RoutinesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routines: []
    }
    this.addRoutine = this.addRoutine.bind(this)
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

  addRoutine(routine) {
    debugger
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

  render() {
    return (
      <section>
        <h3>Routines List</h3>
        <RoutinesList routines={this.state.routines}/>
        <h4>Add Routine</h4>
        <NewRoutineForm addRoutine={this.addRoutine} />
      </section>
    )
  }
}

export default RoutinesContainer
