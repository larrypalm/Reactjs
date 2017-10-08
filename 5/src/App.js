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
      if(search){
        return movie.title.includes(search) ?
        <div>
          <h3 key={index}>{movie.title}</h3>
          <p>{movie.imdbRating}</p>
          <img src={movie.posterurl} alt="movieposter"/>
        </div>
        : ""
      }
      else {
        return <div key={index}>{movie.name}</div>
      }

    })
    return (
      <div className="App">
        <input onChange={this.onChange} name="search"/>
        {movieList}
      </div>
    );
  }
}

export default App;
