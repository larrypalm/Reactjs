import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="App-header">
        <button onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
