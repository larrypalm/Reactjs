import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/actions.js';
import firebase from '../firebase.js'

import '../App.css';
class App extends Component {

  state = {
    movies: "",
    user: ""
  }

  componentDidMount(){
    this.props.actions.fetchMovies();
  }

  add = () => {

    this.props.actions.addMovies({
      name: this.state.movies,
      age: 25
    });
    this.setState({movie: ""});

  }
  //function to fetch data from <input/>
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.onChange} name="movies" value={this.state.movie}/>
        <button onClick={this.add}>Add movie</button>
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
    movies: state.movies,
    user: state.user,
    error: state.error
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
