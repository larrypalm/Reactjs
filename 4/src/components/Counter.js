import React, { Component } from 'react';

class Counter extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <h1>{this.props.counter}</h1>
        </div>
        <div>
          <button onClick={this.props.up} className="button">Increase</button>
          <button onClick={this.props.down} className="button">Decrease</button>
        </div>
      </div>

    );
  }
}

export default Counter;
