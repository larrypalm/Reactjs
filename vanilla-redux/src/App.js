import React, { Component } from 'react';
import { createStore } from 'redux';
import counter from './reducer.js';
import './App.css';


//Store
let store = createStore(counter);

class App extends Component {

  state = {
    counter: 0,
  }

  componentDidMount() {
    store.subscribe(() =>
      this.setState({counter: store.getState()})
    )
  }
  increment = () => {
    store.dispatch({type: 'INCREMENT'});
  }
  decrement = () => {
    store.dispatch({type: 'DECREMENT'});
  }
  double = () => {
    store.dispatch({type: 'DOUBLE'});
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.double}>Double</button>
      </div>
    );
  }
}

export default App;
