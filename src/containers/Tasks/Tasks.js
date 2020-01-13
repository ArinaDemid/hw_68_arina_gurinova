import React, {Component, Fragment} from 'react';
import './Tasks.css';
import Task from '../../components/Task/Task';
import NewTask from '../../components/NewTask/NewTask';
import {connect} from "react-redux";
import {fetchTask, submitTask, valueChange, deleteTask} from '../../store/actions';

let stateTask = null;
let taskText = null;

class Tasks extends Component{

  componentDidMount() {
    this.props.fetchTask();
  }

  render() {
    taskText = {text: this.props.text};
    stateTask = this.props.tasks;
    let tasks = null;
    if (stateTask) {
      tasks = (
        Object.keys(stateTask).map(id => (
          <div className='Task' key={id}>
            <Task
              text={stateTask[id].text}
              delete={(event) => this.props.deleteTask(event, id)}
              id={id}
            />
          </div>
        ))
      );
    } 

    return (
      <Fragment>
        <NewTask valueChange={(event) => this.props.valueChange(event.target.value)} submit={this.props.submitTask} value={this.props.text}/>
        <div className='Tasks'>
          {tasks}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps= state => {
  return {
    tasks: state.tasks,
    text: state.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitTask: (event) => dispatch(submitTask(event, taskText)),
    valueChange: (value) => dispatch(valueChange(value)),
    fetchTask: () => dispatch(fetchTask()),
    deleteTask: (event, id) => dispatch(deleteTask(event, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);