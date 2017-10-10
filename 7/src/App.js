import React, { Component } from 'react';
import './App.css';
import Button from './components/Button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button primary title="Click me now!"/>
        <Button success title="Click me now!"/>
        <Button danger title="Click me now!"/>
      </div>
    );
  }
}

export default App;
