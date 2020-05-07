import React, { Component } from 'react';

class NewWorkoutForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      routine_id: props.routine.id,
      date: '', 
      name: '',
      exercise_1_notes: '', 
      exercise_2_notes: '',
      exercise_3_notes: '',
      exercise_4_notes: '',
      exercise_5_notes: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addWorkout(this.state)
      .then(res => {
        this.props.history.push('/workouts')
      })
  }

  render() {
    const { routine: {exercise_1, exercise_2, exercise_3, exercise_4, exercise_5} } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label className="block" htmlFor="date">Date</label>
          <input 
            className="border"
            type="date" 
            name="date"
            id="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label className="block" htmlFor="name">Name</label>
          <input 
            className="border"
            type="text" 
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label className="block" htmlFor="exercise_1_notes">{exercise_1} Notes</label>
          <input 
            className="border"
            type="text" 
            name="exercise_1_notes"
            id="exercise_1_notes"
            value={this.state.exercise_1_notes}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label className="block" htmlFor="exercise_2_notes">{exercise_2} Notes</label>
          <input 
            className="border"
            type="text" 
            name="exercise_2_notes"
            id="exercise_2_notes"
            value={this.state.exercise_2_notes}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label className="block" htmlFor="exercise_3_notes">{exercise_3} notes</label>
          <input 
            className="border"
            type="text" 
            name="exercise_3_notes"
            id="exercise_3_notes"
            value={this.state.exercise_3_notes}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label className="block" htmlFor="exercise_4_notes">{exercise_4} notes</label>
          <input 
            className="border"
            type="text" 
            name="exercise_4_notes"
            id="exercise_4_notes"
            value={this.state.exercise_4_notes}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label className="block" htmlFor="exercise_5_notes">{exercise_5} notes</label>
          <input 
            className="border"
            type="text" 
            name="exercise_5_notes"
            id="exercise_5_notes"
            value={this.state.exercise_5_notes}
            onChange={this.handleChange}
          />
        </p>
        <input className="px-2 py-1 bg-green-500" type="submit" value="Submit" />
      </form>
    )
  }
}

export default NewWorkoutForm