import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    movies: [],
    search: "",
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

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const {movies, search} = this.state;
    const movieList = movies.map((movie, index) => {
      return(
        <div key={index}>
          <h3>{movie.title}</h3>
          <p className="Movie" >{movie.imdbRating}</p>
          <img src={movie.posterurl} alt="poster"></img>
        </div>
      );

    })
    return (
      <div className="App">
        <input onChange={this.onChange} />
        {movieList}
      </div>
    );
  }
}

export default App;
