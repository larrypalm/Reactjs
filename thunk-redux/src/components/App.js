import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions';
import '../App.css';

class App extends Component {

  state = {
    movies: ""
  }

  componentDidMount(){
    fetch('http://fend-api.herokuapp.com/movies?_limit=20')
      .then(response => response.json)
      .then(movies =>
        this.props.addMovies(movies);
      )
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function mapStateToProps(state){
  return {
    movies: state.movies
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
