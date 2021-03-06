import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Content from './components/Content.js';
import Paragraph from './components/Paragraph.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header/>
          <Content/>
        </div>
      </div>
    );
  }
}

export default App;
