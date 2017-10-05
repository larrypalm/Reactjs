import React, { Component } from 'react';

class Header extends Component {
  render() {
    const isTrue = this.props.isVisible;
    console.log(isTrue);
    return (
      <div className="App-header">

        {isTrue ? <h1>{this.props.values.greeting} {this.props.values.name}</h1> : null}
      </div>
    );
  }
}

export default Header;
