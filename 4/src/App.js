import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter.js';
import CounterDown from './components/Counter.js';

class App extends Component {

  state = {
    counter:0,
  }

  render() {
    return (
      <div className="App">
        <Counter counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
