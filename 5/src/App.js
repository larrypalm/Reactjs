import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    movies: [],
  }

  //Funktion för att hämta från App-intro
  fetchFromApi = () => {
    fetch('https://fend-api.herokuapp.com/movies?_limit=20')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.fetchFromApi}>Click me</button>
      </div>
    );
  }
}

export default App;
