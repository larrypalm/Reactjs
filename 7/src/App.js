import React, { Component } from 'react';
import './App.css';
import Button from './components/Button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button primary title="Click me for primary!"/>
        <Button success title="Click me for success!"/>
        <Button danger title="Click me for danger!"/>
      </div>
    );
  }
}

export default App;
