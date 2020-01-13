import React, {Component, Fragment} from 'react';
import './Tasks.css';
import Task from '../../components/Task/Task';
import NewTask from '../../components/NewTask/NewTask';
import {connect} from "react-redux";
import {fetchTask, submitTask, valueChange, deleteTask} from '../../store/actions';

class Tasks extends Component{

  componentDidMount() {
    this.props.fetchTask();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tasks !== this.props.tasks || prevProps.text !== this.props.text) {
      this.props.fetchTask();
    }
  }

  render() {
    const taskText = {text: this.props.text};
    const stateTask = this.props.tasks;
    let tasks = null;
    if (stateTask) {
      tasks = (
        Object.keys(stateTask).map(id => (
          <div className='Task' key={id}>
            <Task
              text={stateTask[id].text}
              delete={() => this.props.deleteTask(id)}
              id={id}
            />
          </div>
        ))
      );
    } 

    return (
      <Fragment>
        <NewTask  valueChange={(event) => this.props.valueChange(event.target.value)} 
                  submit={(event) => this.props.submitTask(event, taskText)} 
                  value={this.props.text}
        />
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
    submitTask: (event, taskText) => dispatch(submitTask(event, taskText)),
    valueChange: (value) => dispatch(valueChange(value)),
    fetchTask: () => dispatch(fetchTask()),
    deleteTask: (id) => dispatch(deleteTask(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);