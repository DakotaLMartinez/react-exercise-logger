import React, { Component } from 'react';
import { addRoutine, ADD_ROUTINE } from '../../actions';
import { connect } from 'react-redux';

class NewRoutineForm extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      title: '', 
      exercise_1: '', 
      exercise_2: '',
      exercise_3: '',
      exercise_4: '',
      exercise_5: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    addRoutine(this.state)
      .then(routine => {
        this.props.dispatch({
          type: ADD_ROUTINE,
          payload: routine
        })
        this.props.history.push('/routines')
      })
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="title">Title</label>
          <input 
            className="border"
            type="text" 
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="exercise_1">Exercise 1</label>
          <input 
            className="border"
            type="text" 
            name="exercise_1"
            id="exercise_1"
            value={this.state.exercise_1}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="exercise_2">Exercise 2</label>
          <input 
            className="border"
            type="text" 
            name="exercise_2"
            id="exercise_2"
            value={this.state.exercise_2}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="exercise_3">Exercise 3</label>
          <input 
            className="border"
            type="text" 
            name="exercise_3"
            id="exercise_3"
            value={this.state.exercise_3}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="exercise_4">Exercise 4</label>
          <input 
            className="border"
            type="text" 
            name="exercise_4"
            id="exercise_4"
            value={this.state.exercise_4}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="exercise_5">Exercise 5</label>
          <input 
            className="border"
            type="text" 
            name="exercise_5"
            id="exercise_5"
            value={this.state.exercise_5}
            onChange={this.handleChange}
          />
        </p>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default connect()(NewRoutineForm);