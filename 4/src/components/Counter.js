import React, { Component } from 'react';
import BtnUp from './BtnUp.js';
import BtnDown from './BtnDown.js';

class Counter extends Component {

  up = (event) => {

    this.setState({[this.props.counter]: event.target.value++});

  }

  render() {
    console.log(this.props.counter);
    return (
      <div className="App">
        <div>
          <h1>{this.props.counter}</h1>
        </div>
        <div>
          <BtnUp up={this.up}/>
          <BtnDown />
        </div>
      </div>

    );
  }
}

export default Counter;
