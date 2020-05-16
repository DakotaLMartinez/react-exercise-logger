import React, { Component } from 'react';
import RoutinesList from './RoutinesList';
import { connect } from 'react-redux';
import { fetchRoutines, FETCHING_ROUTINES, RECEIVE_ROUTINES } from '../../actions';
import { ButtonLink } from "../ui";

class RoutinesContainer extends Component {

  constructor(props) {
    super(props);
    this.renderLoadedContent = this.renderLoadedContent.bind(this)
  }

  componentDidMount() {
    this.props.fetchRoutines()
  }

  renderLoadedContent() {
    return (
      <React.Fragment>
        <RoutinesList 
          routines={this.props.routines} 
          handleAddWorkoutClick={this.handleAddWorkoutButtonClick}
        />
        <h4>
          <ButtonLink pathname={"/routines/new"}>Add Routine</ButtonLink>
        </h4>
      </React.Fragment>
    )
  }
  render() {
    return (
      <section>
        <h4 className="text-3xl bold">Routines</h4>
        {this.props.loading ? 'Loading...' : this.renderLoadedContent()}
      </section>
    )
  }
}
const mapStateToProps = ({routines}) => {
  return {
    routines: routines.items.map(routineId => routines.itemsById[routineId]),
    loading: routines.loading
  }
}
export default connect(mapStateToProps, { fetchRoutines })(RoutinesContainer)
