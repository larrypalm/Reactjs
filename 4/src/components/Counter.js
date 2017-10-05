import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>{this.props.counter}</h1>
        </div>
        <div>
          <button onClick={this.props.handleClick} className="button">Increase</button>
          <button className="button">Decrease</button>
        </div>
      </div>

    );
  }
}

export default Counter;
