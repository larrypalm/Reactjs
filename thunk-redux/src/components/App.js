import React, { Component } from 'react';
import '../App.css';


class App extends Component {

  state = {
    movies: ""
  }

  componentDidMount(){
    fetch('http://fend-api.herokuapp.com/movies?_limit=20')
      .then(response => response.json)
      .then(movies =>
        this.setState()
      )
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
