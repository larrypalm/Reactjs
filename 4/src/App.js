import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter.js';

class App extends Component {

  state = {
    counter: 0,
  }

  handleClick = (event) => {

    this.setState({counter: event.target.value+1});

  }

  render() {
    return (
      <div className="App">
        <Counter handleClick={this.handleClick} counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
