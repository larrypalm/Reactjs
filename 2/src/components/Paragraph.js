import React, { Component } from 'react';

class Paragraph extends Component {
  render() {
    return (
      <div>
        <p style={this.props.style}>Lorem ipsum dolor</p>
      </div>
    );
  }
}

export default Paragraph;
