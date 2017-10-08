import React, { Component } from 'react';

class BtnUp extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.props.up} className="button">Increase</button>
        </div>
      </div>
    );
  }
}

export default BtnUp;
