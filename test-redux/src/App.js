import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {incrementCounter, decrementCounter, doubleCounter} from './actions.js';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>{this.props.counter}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
        <button onClick={this.props.double}>Double</button>
      </div>
    );
  }
}

//define our global state
function mapStateToProps (state){
  return{
    counter: state
  }
}

//make dispatch-functions into props
//define the name of what till happen in import actions
function mapDispatchToProps(dispatch){
  return{
    increment: () => dispatch (incrementCounter()),
    decrement: () => dispatch (decrementCounter()),
    double: () => dispatch (doubleCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
