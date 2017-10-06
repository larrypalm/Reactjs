import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter.js';

class App extends Component {

  state = {
    counter: 0,
  }

  up = (event) => {

    this.setState({counter: event.target.value++});

  }

  down = (event) => {

    this.setState({counter: event.target.value--});

  }

  render() {
    return (
      <div className="App">
        <Counter handleClick={this.up, this.down} counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
