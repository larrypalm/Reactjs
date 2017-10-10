import React, { Component } from 'react';
import './App.css';
import SelectGenre from './components/SelectGenre.js';
import List from './components/List.js';

class App extends Component {

  state = {
    allMovies: [],  //array for all movies
    allGenres: [],  //array for all genres
    genre: "",      //selected genre
  }

  componentDidMount() {
    this.fetchMovies();
  }
  //function to filter movies by selected genre
  //<option value=""> === e.target.value
  filterByGenre = (event) => {
    const allGenres = this.state.allMovies.filter(movie =>{
      return movie.genre.includes(event.target.value);
    });
    this.setState({allGenres: allGenres, genre: event.target.value});
  }

  //generic click-handler
  onChange = (event) => {
    this.setState([event.target.value]: event.target.value);
  }

  fetchMovies = () => {
    fetch('https://fend-api.herokuapp.com/movies?_limit=20')
      .then(response => response.json())
      .then(data => {
        this.setState({allMovies: data});
      });
  }

  render() {
    const {genre, allGenres, allMovies} = this.state;
    let moviesToShow = genre ? allGenres : allMovies;
    return (
      <div className="App">
        <SelectGenre onChange = {this.filterByGenre} value={genre}/>
        <List data={moviesToShow}/>
      </div>
    );
  }
}

export default App;
