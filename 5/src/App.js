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
      .then(data => {
        this.setState({movies: data});
      })
      .catch(error => console.log(error));
  }

  render() {
    const movieList = this.state.movies.map((movie, index) => {
      return <p key={index}>{movie.title} - {movie.year}</p>
    })

    return (
      <div className="App">
        {movieList}
        <button onClick={this.fetchFromApi}>Click me</button>
      </div>
    );
  }
}

export default App;
