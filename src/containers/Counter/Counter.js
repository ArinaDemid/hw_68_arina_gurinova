import React, {Component} from "react";
import './Counter.css';
import {connect} from "react-redux";
import {addCounter, decrementCounter, incrementCounter, subtractCounter, fetchCounter} from "../../store/actions";
import Spinner from '../../components/UI/Spinner/Spinner';

let count = null;

class Counter extends Component {

  componentDidMount() {
    this.props.fetchCounter();
  }
  render() {
    count = this.props.counter;
    let counter = null;
    if (count) {
      counter = <h1>{this.props.counter}</h1>;
    } else {
      counter = <Spinner />;
    }
    return (
      <div className="Counter">
        {counter}
        <button onClick={this.props.increaseCounter}>Increase</button>
        <button onClick={this.props.decreaseCounter}>Decrease</button>
        <button onClick={this.props.addCounter}>Increase by 5</button>
        <button onClick={this.props.subtractCounter}>Decrease by 5</button>
      </div>
    );
  }
}

const mapStateToProps= state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(incrementCounter(count)),
    decreaseCounter: () => dispatch(decrementCounter(count)),
    addCounter: () => dispatch(addCounter(count)),
    subtractCounter: () => dispatch(subtractCounter(count)),
    fetchCounter: () => dispatch(fetchCounter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);