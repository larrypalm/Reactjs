import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {incrementCounter, decrementCounter, doubleCounter} from './actions.js';


class App extends Component {

  increment = () => {
    this.props.store.dispatch(incrementCounter());
  }
  decrement = () => {
    this.props.store.dispatch(decrementCounter());
  }
  double = () => {
    this.props.store.dispatch(doubleCounter());
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.store.getState()}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.double}>Double</button>
      </div>
    );
  }
}

export default connect(App);
