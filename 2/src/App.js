import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Content from './components/Content.js';
import Paragraph from './components/Paragraph.js';
import Button from './components/Button.js';

class App extends Component {

  handleClick = () => {

    console.log("Hej");

  }

  render() {
    return (
      <div className="App">
        <div>
          <Header values={values} isVisible={true}/>
          <Paragraph style={p1}/>
          <Paragraph style={p2}/>
          <Paragraph style={p3}/>
          <Button onclick={this.handleClick}>Click Me</Button>
        </div>
      </div>
    );
  }
}

const values = {

  name: "Gustav",
  greeting: "Tjanare"

}

const p1 = {
  color: "red",
  fontSize: "200px"
}
const p2 = {
  color: "teal",
  fontSize: "50px"
}
const p3 = {
  color: "brown",
  fontSize: "20px"
}

export default App;
