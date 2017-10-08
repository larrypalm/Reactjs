import React, { Component } from 'react';

class BtnDown extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.props.handleClick} className="button">Decrease</button>
        </div>
      </div>

    );
  }
}

export default BtnDown;
