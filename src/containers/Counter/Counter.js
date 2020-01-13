import React, {Component} from "react";
import './Counter.css';
import {connect} from "react-redux";
import {addCounter, decrementCounter, incrementCounter, subtractCounter, fetchCounter} from "../../store/actions";
import Spinner from '../../components/UI/Spinner/Spinner';

let amount = null;

class Counter extends Component {

  componentDidMount() {
    this.props.fetchCounter();
  }

  render() {
    amount = this.props.counter;
    let counter = null;
    if (amount) {
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
    increaseCounter: () => dispatch(incrementCounter(amount)),
    decreaseCounter: () => dispatch(decrementCounter(amount)),
    addCounter: () => dispatch(addCounter(amount)),
    subtractCounter: () => dispatch(subtractCounter(amount)),
    fetchCounter: () => dispatch(fetchCounter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);