import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    movies: [],
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    fetch('https://fend-api.herokuapp.com/movies?_limit=20')
      .then(response => response.json())
      .then(data => {
        this.setState({movies: data});
      });
  }

  render() {
    const movieList = this.state.movies.map((movie, index) => {
      return (
        <div key={index}>
          <h3>{movie.title}</h3>
          <p className="Movie" >{movie.imdbRating}</p>
          <img src={movie.posterurl}></img>
        </div>
      );
    })
    return (
      <div className="App">
        {movieList}
        <button onClick={this.fetchMovies}>klick</button>
      </div>
    );
  }
}

export default App;
