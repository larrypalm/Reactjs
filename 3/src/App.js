import React, { Component } from 'react';
import './App.css';
import {InputField} from './components/InputField.js';
// import {Button} from './components/Button.js';

class App extends Component {

  state = {
    name:'',
    counter: 0,
  }

  handleClick = (event) =>{
    this.setState({counter: event.target.counter+1});
  }

  handleChange = (event) => {
    this.setState({name : event.target.value});
  }

  render() {
    const reverseName = this.state.name.split("").reverse().join("");
    const displayName = this.state.name;
    const noZ = this.state.name.includes('z') ? 'Omg we got a Z' : this.state.name;

    return (
      <div className="App">
        {displayName}
          <InputField handleChange={this.handleChange}/>
        {reverseName}
        <h1>{noZ}</h1 >

        <div className="App">
          <Button handleClick={this.handleClick}/>
          {this.state.counter}
        </div>

      </div>

    );
  }
}

function Button (props) {
  return(
    <button onClick={props.handleClick}>
      Click
    </button>
  );
}

export default App;
